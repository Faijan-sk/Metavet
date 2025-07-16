import React from "react";

const ChoosingPet = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Main Title */}
      <h1 className="text-4xl font-bold text-center mb-6">Choosing Your Pet</h1>

      {/* Introduction */}
      <section className="mb-8">
        <p className="text-lg text-gray-700 mb-4">
          Choosing to add a pet to your life is a big decision! Pets are
          life-long commitments, and keeping a pet happy, healthy, fed, and
          well-exercised requires time and money. In order to pick the right pet
          for you, one must consider your lifestyle, living situation, and how
          much care you are able or willing to provide. Some pets require very
          little interaction with their owners, while others need almost
          constant companionship! Also, everyone in your family or who resides
          in your home must be included in the decision.
        </p>
        <p className="text-lg text-gray-700">
          To explore a specific pet like birds, cats, dogs, horses, small
          animals, and reptiles, continue reading into this section. If you have
          questions about what pet is right for you, do not hesitate to contact
          our office!
        </p>
      </section>

      {/* Sections Navigation */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sections</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Choosing Your Pet</li>
          <li>Finding Your Pet</li>
          <li>Cats</li>
          <li>Dogs</li>
          <li>Livestock</li>
        </ul>
      </section>

      {/* Finding Your Pet Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Finding Your Pet</h2>
        <p className="text-lg text-gray-700 mb-4">
          Where you go to get your pet is just as important as what kind of pet
          you get. So you've decided what pet is right for you--congratulations!
          But your work is not yet done. Here are some suggestions on where to
          go - and where not to go - in your search for your perfect pet!
        </p>

        {/* Pet Shop */}
        <div className="border-l-4 pl-4 py-2 mb-4">
          <h3 className="font-medium">Pet Shop</h3>
          <p className="text-gray-600">
            A pet shop is a place where dogs, cats, birds, rabbits, reptiles,
            rodents, fish, and other animals not born and raised on those
            premises are kept for the purpose of sale to the public. While many
            people are very satisfied with the pets they acquire from pet
            stores, critics argue that there...
          </p>
          <button className="text-blue-500 text-sm mt-2">Read More</button>
        </div>

        {/* Rescue Agency */}
        <div className="border-l-4 pl-4 py-2 mb-4">
          <h3 className="font-medium">Rescue Agency</h3>
          <p className="text-gray-600">
            Rescuing an animal is a wonderful option for some families. Animals
            find their way into rescue agencies for a variety of reasons. Some
            may have been lost or abandoned, while others may have been given up
            due to their owners' illness, death, or other change in
            circumstances...
          </p>
          <button className="text-blue-500 text-sm mt-2">Read More</button>
        </div>

        {/* Animal Shelter */}
        <div className="border-l-4 pl-4 py-2 mb-4">
          <h3 className="font-medium">Animal Shelter</h3>
          <p className="text-gray-600">
            Animal shelters, or pounds, are organizations that provide temporary
            homes for stray, surrendered, or abandoned animals. They most often
            house dogs and cats. The animals are kept until reclaimed by their
            owner or adopted...
          </p>
          <button className="text-blue-500 text-sm mt-2">Read More</button>
        </div>

        {/* Breeder */}
        <div className="border-l-4 pl-4 py-2 mb-4">
          <h3 className="font-medium">Breeder</h3>
          <p className="text-gray-600">
            Buying from a reputable breeder gives you the opportunity to
            interact with the pet's family, siblings, dam, and possibly the
            sire. A responsible breeder is a good source for a well-bred,
            healthy pet...
          </p>
          <button className="text-blue-500 text-sm mt-2">Read More</button>
        </div>
      </section>

      {/* Cats Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cats</h2>
        <p className="text-lg text-gray-700 mb-4">
          Cats are wonderful companions, and they come in all colors and coat
          types—short, long, or curly. Cats can adapt to a variety of
          environments, and their entertaining antics make them great for
          families and individuals alike. Remember, even though cats are
          independent, they still need food, water, social interaction, and
          veterinary checkups.
        </p>
        <button className="text-blue-500 text-sm mt-2">Read More</button>
      </section>

      {/* Dogs Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dogs</h2>
        <p className="text-lg text-gray-700 mb-4">
          When selecting a dog, consider your lifestyle, living situation, and
          how much care the dog will need. Different breeds have different
          temperaments, sizes, and care requirements. It's important to choose a
          breed that fits your family and home environment.
        </p>
        <button className="text-blue-500 text-sm mt-2">Read More</button>
      </section>

      {/* Livestock Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Livestock</h2>
        <p className="text-lg text-gray-700 mb-4">
          Owning livestock can be a rewarding experience, but it requires a lot
          of preparation and space. Animals like goats, donkeys, horses, and
          cows require special care, housing, and feeding. If you're considering
          raising livestock, it's important to understand the responsibilities
          involved.
        </p>
        <button className="text-blue-500 text-sm mt-2">Read More</button>
      </section>
    </div>
  );
};

export default ChoosingPet;
