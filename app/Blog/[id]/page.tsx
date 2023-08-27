// pages/posts/[id].tsx
import React from "react";
import { useRouter } from "next/router";
import { getPostById } from "@/app/utils";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import PostImageGallery from "@/app/components/ImageGallery";
// import blogPosts from "@/app/utils/mockData"; // Import your blogPosts data

export default async function Post({ params }: { params: { id: string } }) {
  const data = await getPostById(params.id);
  return (
    <div>
      <img src={data.heroImage} alt={data.title} className="w-full" />
      <h1 className="text-center text-5xl font-bold mt-6  p-1">{data.title}</h1>
      <div className="w-[90%] mx-auto my-2 border-t-2 border-b-2 border-black">
        <p className="text-center my-5">
          {data.description}. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ut ratione doloribus animi possimus vel ducimus. Animi ut
          veritatis fugiat esse! Reiciendis illum dolore saepe, sint blanditiis
          repellat officiis nemo vel perferendis nulla ab omnis nam, eius
          repellendus magni, qui vitae? Neque suscipit autem officiis at atque!
          Dicta recusandae rerum facere dolore ipsa. Nisi mollitia atque nostrum
          ducimus quas ex at, iusto unde repellat totam ipsam voluptatem. Sequi
          consequatur dicta dolorum unde accusantium voluptatum nesciunt tempora
          illo at. Repudiandae at rerum nam doloremque mollitia natus odit animi
          laboriosam soluta blanditiis quaerat magni deserunt voluptatem quo
          repellat, nisi quidem libero suscipit itaque maxime. Architecto sunt
          ex esse aliquam impedit, cupiditate distinctio est accusantium
          dignissimos, nisi sit nulla quibusdam voluptas aliquid dolorum tenetur
          consequatur laboriosam a optio vel quae et voluptatem id fugit.
          Veritatis odit accusamus itaque necessitatibus amet consequuntur
          reprehenderit quasi tempora voluptatem tenetur sint eligendi, quidem
          eos error. Odio doloribus accusantium natus in delectus iste, odit
          quia id quod saepe et nihil, reprehenderit quos, incidunt earum
          commodi voluptatem deleniti neque sint eum ratione? Eos accusantium,
          perspiciatis vero provident, deleniti neque doloremque soluta vitae
          laudantium voluptatibus, obcaecati nihil ipsam qui nostrum magnam
          voluptatem odio! Consequatur iste animi quasi sint laboriosam.
          Perspiciatis cum et autem vero quibusdam repellat pariatur iure quia
          sunt, laborum suscipit molestiae eum ducimus necessitatibus est
          asperiores! Reprehenderit omnis nesciunt, dolorum numquam minus ipsa
          tenetur dolores aut? Perferendis quisquam hic ea laudantium cum
          similique! Quibusdam, voluptates! Voluptatibus cupiditate labore autem
          similique sequi sit rem libero necessitatibus, enim, aut, soluta
          reiciendis adipisci non omnis ad officia illo nesciunt nam. Ipsum
          enim, laborum distinctio cum quibusdam fuga autem error nobis optio
          alias harum sequi doloremque dolores? Deleniti rem sit neque porro
          libero quasi quidem cumque sed dolore? Quasi facere eum quis
          voluptatem doloremque, atque soluta quos repudiandae blanditiis omnis
          enim, quisquam iure quidem quas delectus possimus vitae velit
          consectetur dolore reiciendis culpa a incidunt ducimus. Eligendi nihil
          iste obcaecati impedit sunt molestiae labore. Amet vitae molestias
          molestiae voluptatum doloremque tenetur, iste iure veniam odit
          expedita exercitationem dolorem natus qui vel. Reiciendis provident
          accusantium optio libero natus, saepe enim tenetur tempora deleniti ut
          eaque minus minima. Quia minus, libero perferendis ab odit
          perspiciatis aliquam vel quisquam facere nobis ad rerum vitae nesciunt
          iusto saepe incidunt in soluta, doloribus laboriosam quos explicabo.
          Tempore, necessitatibus! Et dignissimos eveniet at fuga deleniti earum
          architecto libero iusto incidunt repellat quasi numquam perspiciatis,
          voluptatibus hic voluptatem impedit consectetur unde, nam excepturi
          doloribus? Totam voluptate nihil molestias accusantium amet sed
          adipisci assumenda magni dicta aliquam repudiandae et corrupti culpa
          pariatur dolor quod consequuntur, esse voluptatum quaerat architecto!
          Odio rem alias, quaerat quasi provident ullam aliquid laboriosam. Cum
          unde ipsam ab nihil sequi autem harum, cupiditate excepturi, adipisci
          consequatur quia maxime nisi nam, cumque laudantium velit tempore.
          Amet voluptatibus soluta perferendis sapiente ex expedita, at quo
          voluptatem molestiae sit repudiandae tempore sequi nulla labore minima
          voluptas quas error perspiciatis veritatis laudantium? Quo, eaque,
          iusto similique nulla dolorem eveniet ab numquam magnam necessitatibus
          aliquid maiores vel incidunt adipisci nostrum architecto fugiat quos
          modi assumenda obcaecati ullam? Eveniet, maiores. Laboriosam dolore
          sit a accusamus? Nisi libero magnam adipisci omnis mollitia rerum
          assumenda cum, eveniet, architecto aperiam fugiat necessitatibus,
          nesciunt incidunt error ducimus tempore eum voluptate qui vel.
          Architecto repellat modi minima ut hic laborum quod! Eligendi mollitia
          deleniti alias architecto iure, molestias, provident eius fugiat
          corporis recusandae possimus id amet velit voluptatem consequatur
          nostrum excepturi? Quod possimus repellendus laboriosam? Debitis
          minima molestiae sed ab cupiditate adipisci autem aut a natus
          laudantium eius, consequatur itaque ratione illum non aliquam rerum
          corporis! Veniam aperiam placeat officia facilis temporibus sequi a
          rerum dolor, omnis necessitatibus!
        </p>
        <div className="w-full h-4 flex relative p-6 mb-4">
          <p className="absolute left-2 ">
            Author: <span className="capitalize">{data.owner.username}</span>
          </p>
          <p className="absolute right-2">Likes: {data.likes.length}</p>
        </div>
      </div>
      <PostImageGallery images={data.images} />
    </div>
  );
}
