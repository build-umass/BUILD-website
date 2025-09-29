import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './JoinUsHero.module.css';

export default function JoinUsHero() {
  return (
    <div>
      <div className={styles.topCurve} />
      <div className="bg-gradient-to-r from-red-900 to-red-600">
        <div className="container mx-auto px-4 py-10">
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full max-w-6xl">
              <div className="flex justify-center lg:justify-start">
                <Image
                  className="max-w-full h-auto"
                  src="/images/illustrations/people-chatting.svg"
                  alt="People chatting"
                  width={400}
                  height={300}
                />
              </div>
              <div className="text-center lg:text-left">
                <div>
                  <h1 className="text-white text-4xl md:text-5xl font-bold font-montserrat mb-6 text-center">
                    Interested in joining us?
                  </h1>
                </div>
                <div>
                  <p className="text-white text-lg md:text-xl font-montserrat mb-8 text-center leading-relaxed">
                    We have applications for various positions that open at the
                    start of each semester. Upon completion, we will contact you
                    for an interview. If you are not sure which position is best
                    for you, apply to all positions!
                  </p>
                </div>
                <div className="flex justify-center lg:justify-start">
                  <Link href="/apply">
                    <button className="relative bg-white text-black font-montserrat font-bold py-3 px-6 rounded-md transition-all duration-300 hover:px-8 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 group">
                      <span className="relative z-10">Apply!</span>
                      <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-1">
                        ➜
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomCurve} />
    </div>
  );
}
