'use client';
interface ContainerProps{
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return ( 
        <div className="max-w-{250px} mx-auto xl:px-20 sm: px-2 md:px-10 px-4 ">
             {children}
        </div>
     );
}
 
export default Container;