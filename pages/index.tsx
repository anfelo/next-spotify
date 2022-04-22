import GradientLayout from "../components/GradientLayout";

const Home = () => {
	return (
		<GradientLayout
			roundImage={false}
			color="red"
			subtitle="profile"
			title="Andres Osorio"
			description="15 public playlists"
		>
			<div>hello</div>
		</GradientLayout>
	);
};

export default Home;
