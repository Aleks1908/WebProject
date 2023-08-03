import './banner_section.css'
import slide1 from './slide1.webp'
import slide2 from './slide2.webp'
import slide3 from './slide3.webp'
export const BannerSection = () => {

    let counter = 1;
    setInterval(function() {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > 4){
            counter = 1;
        }
    }, 5000);

    return(
        <div className='banner_section'>
            <div className='slider'>
            <div className='slides'>
                
                <input type="radio" name="radio-btn" id="radio1"></input>
                <input type="radio" name="radio-btn" id="radio2"></input>
                <input type="radio" name="radio-btn" id="radio3"></input>
                <input type="radio" name="radio-btn" id="radio4"></input>

                <div className='slide first'>
                    <img src= {slide1} ></img>
                </div>
                <div className='slide'>
                    <img src= {slide2} ></img>
                </div>
                <div className='slide'>
                    <img src= {slide3} ></img>
                </div>
                <div className='slide '>
                    <img src= {slide2} ></img>
                </div>

                <div className='navigation_auto'>
                    <div className='auto_btn1'></div>
                    <div className='auto_btn2'></div>
                    <div className='auto_btn3'></div>
                    <div className='auto_btn4'></div>
                </div>
            </div>
            {/* <div className='navigation_manual'>
                <label htmlFor="radio1" className='manual_btn'></label>
                <label htmlFor="radio2" className='manual_btn'></label>
                <label htmlFor="radio3" className='manual_btn'></label>
                <label htmlFor="radio4" className='manual_btn'></label>
            </div> */}
        </div>
    </div>
    )
}

// export const BannerSection = () => {
//     return(
//         <div className="imgSlider">
            
//         </div>
//     )
// }