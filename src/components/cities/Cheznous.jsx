import React from 'react';

const ChezNous = () => {
  return (
    <div className="font-sans text-gray-800 leading-relaxed px-5 max-w-screen-xl mx-auto">
      <header className="text-center bg-black text-white py-10 px-5 rounded-xl">
        <h1 className="text-4xl font-bold mb-2">Bienvenue chez Your Compass</h1>
        <p className="text-lg">Votre guide ultime pour explorer Tanger !</p>
      </header>

      <section className="bg-gray-100 p-6 my-6 rounded-xl shadow-md">
        <h2 className="text-3xl text-black border-b-2 border-black pb-2 mb-4">Qui sommes-nous ?</h2>
        <p className="mb-2">
          <strong>Your Compass</strong> est une entreprise locale dédiée à faciliter l'expérience des visiteurs à Tanger.
          Nous proposons des services adaptés aux besoins des voyageurs, qu'ils soient ici pour le tourisme, le travail,
          ou un long séjour.
        </p>
        <p>
          Notre objectif est de vous offrir un accès facile aux meilleures adresses et expériences de la ville.
        </p>
      </section>

      <section className="bg-gray-100 p-6 my-6 rounded-xl shadow-md">
        <h2 className="text-3xl text-black border-b-2 border-black pb-2 mb-4">Un peu d'histoire sur Tanger</h2>
        <p>
          Située au carrefour entre l'Europe et l'Afrique, Tanger est une ville riche en histoire et en culture. Connue
          pour son atmosphère cosmopolite, elle a été une source d'inspiration pour de nombreux artistes et écrivains.
        </p>
      </section>

      <section className="bg-gray-100 p-6 my-6 rounded-xl shadow-md">
        <h2 className="text-3xl text-black border-b-2 border-black pb-2 mb-4">Nos Services</h2>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-5 rounded-xl text-center transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Restaurants</h3>
            <p>Découvrez les meilleurs restaurants de Tanger offrant des cuisines locales et internationales.</p>
            <button className="bg-black text-white mt-4 py-2 px-4 rounded-md hover:bg-gray-800 transition-colors">Voir les restaurants</button>
          </div>
          <div className="bg-white p-5 rounded-xl text-center transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Voitures de Location</h3>
            <p>Profitez de voitures de location modernes pour explorer Tanger à votre rythme.</p>
            <button className="bg-black text-white mt-4 py-2 px-4 rounded-md hover:bg-gray-800 transition-colors">Voir les voitures</button>
          </div>
          <div className="bg-white p-5 rounded-xl text-center transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Hôtels</h3>
            <p>Choisissez parmi les meilleurs hôtels pour un séjour confortable à Tanger.</p>
            <button className="bg-black text-white mt-4 py-2 px-4 rounded-md hover:bg-gray-800 transition-colors">Voir les hôtels</button>
          </div>
          <div className="bg-white p-5 rounded-xl text-center transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Lieux Touristiques</h3>
            <p>Visitez les lieux incontournables de Tanger, de ses plages à ses monuments historiques.</p>
            <button className="bg-black text-white mt-4 py-2 px-4 rounded-md hover:bg-gray-800 transition-colors">Voir les lieux</button>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 p-6 my-6 rounded-xl shadow-md">
        <h2 className="text-3xl text-black border-b-2 border-black pb-2 mb-4">Activités Culturelles et Loisirs</h2>
        <p>
          Tanger propose une large gamme d'activités culturelles : musées, galeries d'art, festivals, et spectacles vivants.
          Découvrez la culture marocaine à travers la musique, la danse et l'artisanat local.
        </p>
      </section>

      <section className="bg-gray-100 p-6 my-6 rounded-xl shadow-md">
        <h2 className="text-3xl text-black border-b-2 border-black pb-2 mb-4">Notre Service Unique</h2>
        <p>
          Nous vous accompagnons dans l'organisation de votre séjour à Tanger en vous offrant des recommandations
          personnalisées et une assistance sur place. Que ce soit pour réserver un restaurant, organiser une visite guidée
          ou trouver les meilleurs spots de la ville, nous sommes là pour vous aider.
        </p>
      </section>

      <section className="bg-gray-100 p-6 my-6 rounded-xl shadow-md">
        <h2 className="text-3xl text-black border-b-2 border-black pb-2 mb-4">Témoignages de Voyageurs</h2>
        <blockquote className="italic bg-gray-200 p-4 border-l-4 border-black rounded-md mb-4">
          "Grâce à Your Compass, j'ai découvert des endroits incroyables à Tanger que je n'aurais jamais trouvés seul. Une
          expérience inoubliable !" - <strong>Lucas, France</strong>
        </blockquote>
        <blockquote className="italic bg-gray-200 p-4 border-l-4 border-black rounded-md">
          "Service impeccable, équipe très réactive et conseils au top. Je recommande vivement !" - <strong>Sarah, Canada</strong>
        </blockquote>
      </section>
    </div>
  );
};

export default ChezNous;
