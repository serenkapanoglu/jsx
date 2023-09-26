const Seren = (props) => {
   return (
   <ul>
    Bilgiler:
   <li>Adi: {props.name}</li>
   <li>Soyadi:{props.lastname} </li>
   <li>Yas: {props.age}</li>
   <li>Meslek:{props.occp} </li>
   </ul>
   );
};