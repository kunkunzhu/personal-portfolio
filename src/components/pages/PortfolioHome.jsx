import React, { Component } from 'react';
import { Wrap, Background, Foreground } from './PortfolioStyle';
import Footer from '../Footer';
import Projects from '../Projects';

// import Typist from 'react-typist';

// const TextLoop = () => {
//     const[mounted, setMounted] = useState(true);

//     useEffect(() => {
//         setMounted(true);
//     }, [mounted]);

//     return (
//         <Hello>
//             {mounted ? (
//                 <Typist 
//                     className="reason" 
//                     onTypingDone={() => 
//                     setMounted(false)}>
//                     <span>Hello, I'm Kun.</span>
//                     <Typist.Backspace count={15} delay={800} />
//                 </Typist>
//             ) : (
//                 <span className="reason">
//                     {"n"}
//                 </span>
//             )}
//         </Hello>
//     );
// }


class PortfolioHome extends Component{
    render() {
        return (
            <Wrap>
                <Foreground/>
                <Background/>
                <Projects/>
                <Footer/>
            </Wrap>
        )
    }
}

export default PortfolioHome
