const Persons = ({ persons, handleDelete }) => (
  <div>
    {persons.map((person) => (
      <p key={person.id}>
        {person.name} {person.number}{" "}
        <button type="button" onClick={() => handleDelete(person)}>
          delete
        </button>
      </p>
    ))}
  </div>
);

export default Persons;
