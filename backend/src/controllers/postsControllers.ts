import { Request, Response } from "express"
import { redditApi } from "../api/redditApi-config"
import { PostResponse } from "../interfaces/interface"
import { HfInference } from "@huggingface/inference"
import { labelConstants } from "../constants/labelConstants"

const apiKey = "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" //Utilice esta IA por prueba gratuita, con OpenAI no se pudo porque requería pago. https://huggingface.co/

const hf = new HfInference(apiKey)

export const analizePostController = async (req: Request, res: Response) => {
  try {
    const { data: response } = await redditApi.get<PostResponse>("/r/subreddit/new?limit?=5", {
      headers: {
        Authorization: req.headers.authorization,
      },
    })

    const result = await Promise.all(
      response.data.children.map(async (post) => {
        const sentimentResult = await hf.textClassification({
          model: "cardiffnlp/twitter-roberta-base-sentiment",
          inputs: post.data.title,
        })

        return {
          title: post.data.title,
          ups: post.data.ups,
          commentsCount: post.data.num_comments,
          datePosted: post.data.created_utc,
          sentiment: labelConstants[sentimentResult[0].label as string],
        }
      })
    )

    // const result = response.data.children.map((post) => {
    //   const sentiments = Object.values(labelConstants)
    //   const randomSentiment = sentiments[Math.floor(Math.random() * sentiments.length)]
    //   return {
    //     title: post.data.title,
    //     ups: post.data.ups,
    //     commentsCount: post.data.num_comments,
    //     datePosted: post.data.created_utc,
    //     sentiment: randomSentiment,
    //   }
    // })

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}
