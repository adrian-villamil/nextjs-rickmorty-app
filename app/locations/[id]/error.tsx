'use client';

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaCircleExclamation } from "react-icons/fa6";
import errorImage from '@/public/images/error-page-img.png';
import styles from './error.module.css';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <FaCircleExclamation />
          Oops! Something went wrong
        </h1>
        <div className={styles['image-container']}>
          <Image
            src={errorImage}
            alt="error-image"
            width={640}
            height={360}
            priority
            className={styles.image}
          />
        </div>
        <div className={styles['buttons-container']}>
          <button
            className={styles.button}
            onClick={() => reset()}
          >
            Try Again
          </button>
          <button
            className={styles.button}
            onClick={() => router.push('/locations')}
          >
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}