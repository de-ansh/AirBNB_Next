'use client'
interface HeadingProps {
    title: String;
    subTitle: String;
    center: boolean;
}
const Heading: React.FC<HeadingProps> = ({
    title,
    subTitle,
    center
}) => {
    return ( 
        <div className={center?  ' text-center': 'text-start'} >
            <div className="text-2xl font-bold ">
                {title}
            </div>
            <div className="mt-2 text-neutral-500 font-light ">
                {subTitle}
            </div>

        </div>
     );
}
 
export default Heading;