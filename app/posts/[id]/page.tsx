import { getPostData } from '@/lib/post'
import homeStyles from '../../Home.module.css'
import 'react'

interface Post {
  date: string
  title: string
  id: string
  contentHtml: string
}

export default async function Post({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const postData: Post = await getPostData(id)
  return (
    <article>
      <h1 className={homeStyles.headingXl}>{postData.title}</h1>
      <div className={homeStyles.lightText}>{postData.date}</div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  )
}
