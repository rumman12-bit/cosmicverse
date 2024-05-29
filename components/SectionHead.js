export default function SectionHead(props) {
    return (
        <div className="projectHeadingTitle mb-12 relative z-10">
            <h1 className='projectsSub_Title mx-auto text-center text-3xl font-black mb-1.5 multiColorTxt'>{props.Title}</h1>
            <h1 className="projectsHeadTitleLine mx-auto text-md text-center multiColorTxt font-black">{props.subTitle}
            </h1>
            
            
        </div>
    )
}
