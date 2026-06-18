import Footer from "@/components/home/footer/Footer";
import Navbar from "@/components/home/navbar/Navbar";

const MainLayout = ({ children }) => {
	return (
		<>
			<Navbar></Navbar>
			<>{children}</>
			<Footer></Footer>
		</>
	);
};

export default MainLayout;
