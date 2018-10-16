import '../styles/home.css'
// import Button from '../components/menu-button'
import Content from '../components/content'

const Home = () =>(
    <div className="wrapper">
        <div className="top">
            <div className="hero"></div>
            <div className="hero2"> Peter Braxton </div>
            <div className="cta"></div>
        </div>
        <div className="middle">
            <div className="h">
                <div> 1 </div>
                <div> 2 </div>
                <div> 3 </div>
                <div> 4 </div>
                <div> 5 </div>
                <div> 6 </div>
                <div> 7 </div>
                <div> 8 </div>
                <div> 9 </div>
                <div> 10 </div>
            </div>
            <div className="c">
                <Content />
            </div>

        </div>
        <div className="footer">
            <div>
            </div>
        </div>
    </div>
)

export default Home