'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, planetVariants, staggerContainer } from '../utils/motion';
import { ExploreCard, StartSteps, TitleText, TypingText } from '../components';
import { startingFeatures } from '../constants';
import Image from 'next/image';

const GetStarted = () => (
	<section className={`${styles.paddings} relative z-10`}>
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
		>
			<motion.div
				variants={planetVariants('left')}
				className={`flex-1 ${styles.flexCenter}`}
			>
				<div className="w-[90%] h-[90%]">
					<Image
						src="/get-started.png"
						alt="get-started"
						fill
						className="object-contain"
					/>
				</div>
			</motion.div>
			<motion.div
				variants={fadeIn('left', 'tween', 0.2, 1)}
				className="flex-[0.75] flex justify-center flex-col"
			>
				<TypingText title="| How Metaverse Works" />
				<TitleText title={<>Get started with just a few clicks</>} />
				<div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
					{startingFeatures.map((feature, index) => (
						<StartSteps
							key={feature}
							number={index + 1}
							text={feature}
						/>
					))}
				</div>
			</motion.div>
		</motion.div>
	</section>
);

export default GetStarted;
