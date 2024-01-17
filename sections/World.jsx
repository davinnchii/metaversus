'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
	<section className={`${styles.paddings} relative z-10`}>
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className={`${styles.innerWidth} mx-auto flex flex-col`}
		>
			<TypingText title="| People on the World" textStyles="text-center" />
			<TitleText
				title={<>Track friends around you and invite them to play together in the same world</>}
				textStyles="text-center"
			/>
			<motion.div
				variants={fadeIn('up', 'tween', 0.3, 1)}
				className="relative mt-[68px] flex w-full h-[550px]"
			>
				<img
					src="/map.png"
					alt="map"
					className="w-full h-full object-cover"
				/>

				<div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
					<img
						src="/people-01.png"
						className="w-full h-full"
					/>
				</div>
				<div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
					<img
						src="/people-02.png"
						className="w-full h-full"
					/>
				</div>
				<div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
					<img
						src="/people-03.png"
						className="w-full h-full"
					/>
				</div>
				<div className="absolute top-1/2 left-[20%] md:left-[10%] w-[210px] h-[160px]
				p-[6px] rounded-3xl bg-[#ffffff14]
				flex items-center justify-center backdrop-blur-[6px] shadow-[0px_40px_80px_0px_#00000040]">
					<div className="relative flex flex-col items-center justify-end">
						<img
							src="/card-1.png"
							className="w-[95%] h-[95%] rounded-3xl"
						/>
						<div className="absolute bottom-[10px] flex flex-col">
							<div className="flex relative flex-row items-center mb-[12px]">
								<img
									src="/people-card-03.svg"
									className="w-[24px] h-[24px] rounded-3xl absolute bottom-0 right-[100px]"
								/>
								<img
									src="/people-card-02.svg"
									className="w-[24px] h-[24px] rounded-3xl absolute bottom-0 right-[111px]"
								/>
								<img
									src="/people-card-01.svg"
									className="w-[24px] h-[24px] rounded-3xl absolute bottom-0 right-[125px]"
								/>
								<span className="text-white absolute bottom-0 text-[12px] right-[5px]"> +264 has joined</span>
							</div>
							<h4
								className="text-white text-[18px]"
							>
								The Upside Down
							</h4>
						</div>
					</div>
				</div>
				<div className="absolute top-10 right-[30%] w-[210px] h-[160px]
				p-[6px] rounded-3xl bg-[#fffff14] flex items-center justify-center backdrop-blur-[6px] shadow-[0px_40px_80px_0px_#00000040]">
					<div className="relative flex flex-col items-center justify-end">
						<img
							src="/card-2.png"
							className="w-full h-full rounded-3xl"
						/>
						<div className="absolute bottom-[10px] flex flex-col">
							<div className="flex relative flex-row items-center mb-[12px]">
								<img
									src="/people-card-03.svg"
									className="w-[24px] h-[24px] rounded-3xl absolute bottom-0 right-[70px]"
								/>
								<img
									src="/people-card-02.svg"
									className="w-[24px] h-[24px] rounded-3xl absolute bottom-0 right-[81px]"
								/>
								<img
									src="/people-card-01.svg"
									className="w-[24px] h-[24px] rounded-3xl absolute bottom-0 right-[95px]"
								/>
								<span className="text-white absolute bottom-0 text-[12px] right-[-25px]"> +264 has joined</span>
							</div>
							<h4
								className="text-white text-[18px]"
							>
								Hawkins Labs
							</h4>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	</section>
);

export default World;
