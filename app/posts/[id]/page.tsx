import { getPostData } from '@/lib/post'
import homeStyles from '../../Home.module.css'
import 'react'
import { Metadata } from 'next'

type Context = {
  params: { id: string }
}
interface Post {
  date: string
  title: string
  id: string
  contentHtml: string
}

export async function generateMetadata({ params }: Context): Promise<Metadata> {
  const { id } = await params
  const postData = await getPostData(id)

  return {
    title: postData.title,
    description: postData.title,
    openGraph: {
      title: postData.title,
      description: postData.title,
      type: 'website',
      locale: 'ko_KR'
    }
  }
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
