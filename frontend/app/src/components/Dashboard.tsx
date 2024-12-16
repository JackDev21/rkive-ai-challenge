import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts"
import { usePosts } from "../hooks/usePosts"
import { useEffect } from "react"
import moment from "moment"

export const Dashboard = () => {
  const { posts, dataPosts } = usePosts()

  const data = [
    { name: "Negativos", sentiment: posts.filter((post) => post.sentiment === "negative").length },
    { name: "Neutros", sentiment: posts.filter((post) => post.sentiment === "neutral").length },
    { name: "Positivos", sentiment: posts.filter((post) => post.sentiment === "positive").length },
  ]

  useEffect(() => {
    dataPosts()
  }, [])

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>
      <table className="min-w-full bg-white border border-gray-200 mb-6">
        <thead>
          <tr className="bg-slate-400">
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Upvotes</th>
            <th className="py-2 px-4 border-b">Comments</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Sentiment</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.title} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{post.title}</td>
              <td className="py-2 px-4 border-b">{post.commentsCount}</td>
              <td className="py-2 px-4 border-b">{post.ups}</td>
              <td className="py-2 px-4 border-b">{moment(new Date(post.datePosted * 1000)).format("MMM Do")}</td>
              <td className="py-2 px-4 border-b">{post.sentiment}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center">
        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
          <Legend
            width={100}
            wrapperStyle={{
              top: 40,
              right: 20,
              backgroundColor: "#f5f5f5",
              border: "1px solid #d5d5d5",
              borderRadius: 3,
              lineHeight: "40px",
            }}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="sentiment" fill="#8884d8" barSize={30} />
        </BarChart>
      </div>
    </div>
  )
}
