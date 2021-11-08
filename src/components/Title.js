export default function Title(props) {
   return (
      <>
         <h1 className="title">Mario Kingdom {props.title}</h1>
         <br />
         <h2 className="subtitle">{props.subtitle}</h2>
      </>
   );
}
