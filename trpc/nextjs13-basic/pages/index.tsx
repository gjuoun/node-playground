import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { trpcClient } from './config/trpc/trpc.client';

export default async function Home() {
  const user = await trpcClient.userById.query(1);

  return (
    <div></div>
  )
}
