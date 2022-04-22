import { Box } from "@chakra-ui/layout";
import Sidebar from "./Sidebar";

const PlayerLayout = ({ children }) => {
	return (
		<Box width="100" height="100vh">
			<Box position="absolute" top="0" width="250px" left="0">
				<Sidebar></Sidebar>
			</Box>
			<Box marginLeft="250px" marginBottom="100px">
				{children}
			</Box>
			<Box position="absolute" left="0" bottom="0">
				Bottom Player
			</Box>
		</Box>
	);
};

export default PlayerLayout;
