export interface PostResponse {
  kind: string
  data: PostData
}

export interface PostData {
  after: string
  dist: number
  modhash: string
  geo_filter: string
  children: Child[]
  before: null
}

export interface Child {
  kind: Kind
  data: ChildData
}

export interface ChildData {
  approved_at_utc: null
  subreddit: Subreddit
  selftext: string
  author_fullname: string
  saved: boolean
  mod_reason_title: null
  gilded: number
  clicked: boolean
  title: string
  link_flair_richtext: any[]
  subreddit_name_prefixed: SubredditNamePrefixed
  hidden: boolean
  pwls: null
  link_flair_css_class: null | string
  downs: number
  thumbnail_height: null
  top_awarded_type: null
  hide_score: boolean
  name: string
  quarantine: boolean
  link_flair_text_color: LinkFlairTextColor | null
  upvote_ratio: number
  author_flair_background_color: null
  subreddit_type: SubredditType
  ups: number
  total_awards_received: number
  media_embed: Gildings
  thumbnail_width: null
  author_flair_template_id: null
  is_original_content: boolean
  user_reports: any[]
  secure_media: null
  is_reddit_media_domain: boolean
  is_meta: boolean
  category: null
  secure_media_embed: Gildings
  link_flair_text: null | string
  can_mod_post: boolean
  score: number
  approved_by: null
  is_created_from_ads_ui: boolean
  author_premium: boolean
  thumbnail: Thumbnail
  edited: boolean | number
  author_flair_css_class: null
  author_flair_richtext: any[]
  gildings: Gildings
  content_categories: null
  is_self: boolean
  mod_note: null
  created: number
  link_flair_type: FlairType
  wls: null
  removed_by_category: null
  banned_by: null
  author_flair_type: FlairType
  domain: Domain
  allow_live_comments: boolean
  selftext_html: null | string
  likes: null
  suggested_sort: null
  banned_at_utc: null
  view_count: null
  archived: boolean
  no_follow: boolean
  is_crosspostable: boolean
  pinned: boolean
  over_18: boolean
  all_awardings: any[]
  awarders: any[]
  media_only: boolean
  can_gild: boolean
  spoiler: boolean
  locked: boolean
  author_flair_text: null
  treatment_tags: any[]
  visited: boolean
  removed_by: null
  num_reports: null
  distinguished: null
  subreddit_id: SubredditID
  author_is_blocked: boolean
  mod_reason_by: null
  removal_reason: null
  link_flair_background_color: null | string
  id: string
  is_robot_indexable: boolean
  report_reasons: null
  author: string
  discussion_type: null
  num_comments: number
  send_replies: boolean
  contest_mode: boolean
  mod_reports: any[]
  author_patreon_flair: boolean
  author_flair_text_color: null
  permalink: string
  stickied: boolean
  url: string
  subreddit_subscribers: number
  created_utc: number
  num_crossposts: number
  media: null
  is_video: boolean
  poll_data?: PollData
  url_overridden_by_dest?: string
}

export enum FlairType {
  Text = "text",
}

export enum Domain {
  RedditCOM = "reddit.com",
  SelfSubreddit = "self.subreddit",
}

export interface Gildings {}

export enum LinkFlairTextColor {
  Dark = "dark",
}

export interface PollData {
  prediction_status: null
  total_stake_amount: null
  voting_end_timestamp: number
  options: Option[]
  vote_updates_remained: null
  is_prediction: boolean
  resolved_option_id: null
  user_won_amount: null
  user_selection: null
  total_vote_count: number
  tournament_id: null
}

export interface Option {
  text: string
  id: string
}

export enum Subreddit {
  Subreddit = "subreddit",
}

export enum SubredditID {
  T52Qi8C = "t5_2qi8c",
}

export enum SubredditNamePrefixed {
  RSubreddit = "r/subreddit",
}

export enum SubredditType {
  Public = "public",
}

export enum Thumbnail {
  Default = "default",
  Self = "self",
}

export enum Kind {
  T3 = "t3",
}
