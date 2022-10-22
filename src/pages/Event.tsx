import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { useNavigate, useParams } from "react-router-dom";
import { useGetFirstSlugLessonQuery } from "../graphql/generated";

export function Event(){
  const {slug} = useParams<{slug:string}>()
  const navigate = useNavigate();

  // if(!slug){
  //   const {data} = useGetFirstSlugLessonQuery();
  //   const firstSlug = data?.lessons[0].slug;
  //   if(firstSlug){
  //     navigate(`/event/lesson/o-segredo-dos-campeoes`)
  //   }
  // }

  return (
    <div className="flex flex-col min-h-screen" >
      <Header />
      <main className="sm:flex flex-1">
        { slug
          ? <Video lessonSlug={slug} />
          : <div className="flex-1" />
        }
        <Sidebar />
      </main>
    </div>

  )
}