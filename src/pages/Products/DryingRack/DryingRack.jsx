// import React from 'react';
// import './DryingRack.scss';

// const DryingRack = () => {
//   return (
//     <div className="slider">
//       <input type="radio" id="slide1" name="slide" defaultChecked />
//       <input type="radio" id="slide2" name="slide" />
//       <input type="radio" id="slide3" name="slide" />
//       <input type="radio" id="slide4" name="slide" />
//       <ul>
//         <li>
//           <img
//             src="http://www.dessko.com/assets/images/116/116_size_400x300_wallpaper-25331.jpg?1265653882"
//             alt="Slide 1"
//           />
//         </li>
//         <li>
//           <img
//             src="http://www.widescreenwalls.com/wp-content/uploads/2011/09/Beautiful-Landscape-400x300.jpg"
//             alt="Slide 2"
//           />
//         </li>
//         <li>
//           <img
//             src="http://www.photofurl.com/wp-content/uploads/2010/04/blue-water-beach-wallpaper-400x300.jpg"
//             alt="Slide 3"
//           />
//         </li>
//         <li>
//           <img
//             src="http://www.widescreenwalls.com/wp-content/uploads/2011/10/Winter_Landscape-400x300.jpg"
//             alt="Slide 4"
//           />
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default DryingRack;




import React from 'react';
import './DryingRack.scss';
import sliderImages from './SliderData'; // Импорт массива изображений

const DryingRack = () => {
  return (
    <div className="slider">
      <input type="radio" id="slide1" name="slide" defaultChecked />
      <input type="radio" id="slide2" name="slide" />
      <input type="radio" id="slide3" name="slide" />
      <input type="radio" id="slide4" name="slide" />
      <ul>
        {sliderImages.map((image, index) => (
          <li key={index}>
            <img src={image.src} alt={image.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DryingRack;