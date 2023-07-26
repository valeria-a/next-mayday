// import Image from 'next/image'
// import styles from './page.module.css'
import { redirect } from 'next/navigation';

export default async function Home({ params }: {params:any}) {
    redirect('/flights');
  // ...
}
