import '../components/InnerContainer.css'

export default function InnerContainer({children}) {
    return (
        <div className='innerContainer'>
            {children}
        </div>
    )
}