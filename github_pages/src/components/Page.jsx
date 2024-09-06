import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Page(props){
    return (
        <>
            <NavBar/>
            {props.children}
            <Footer/>
        </>
    )
}