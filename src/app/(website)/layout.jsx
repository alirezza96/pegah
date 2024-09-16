import Header from "@/components/templates/root/Header";
import Navbar from "@/components/templates/root/navbar/Navbar";
import Footer from "@/components/templates/root/Footer";
export default function layout({ children }) {
    return (
        <div className="flex flex-col min-h-svh justify-between">
            {/* <Header /> */}
            <Navbar />
            <main className="flex-grow my-4">
                {children}
            </main>
            <Footer />
        </div>
    )
}