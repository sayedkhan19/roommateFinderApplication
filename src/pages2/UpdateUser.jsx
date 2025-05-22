import { useLoaderData } from "react-router";

const UpdateUser = () => {
  const allUser = useLoaderData();
  console.log(allUser);
  const {
    _id,
    title,
    location,
    rent,
    roomType,
    lifestylePreferences,
    description,
    contactInfo,
    availability,
    userEmail,
    userName,
    photoUrl,
  } = allUser || {};
  // const {user} = use(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedUser = Object.fromEntries(formData.entries());
    console.log((updatedUser));
    
  };
  if (!allUser) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  return (
    <div className=" text-center">
      <div className="p-12 space-y-4">
        <h1 className="text-3xl font-bold">Find Room</h1>
      </div>

      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Title</label>
            <input
              type="text"
              className="input w-full"
              name="title"
              placeholder="title"
              defaultValue={title}
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Location</label>
            <input
              type="text"
              className="input w-full"
              name="location"
              placeholder="Location"
              defaultValue={location}
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Rent</label>
            <input
              type="text"
              className="input w-full"
              name="rent"
              placeholder="rent"
              defaultValue={rent}
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">roomType</label>
            <input
              type="text"
              className="input w-full"
              name="roomType"
              placeholder="roomType"
              defaultValue={roomType}
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">lifestylePreferences</label>
            <input
              type="text"
              className="input w-full"
              name="lifestylePreferences"
              placeholder="lifestylePreferences"
              defaultValue={lifestylePreferences}
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">description</label>
            <input
              type="text"
              className="input w-full"
              name="description"
              placeholder="description"
              defaultValue={description}
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">contactInfo</label>
            <input
              type="text"
              className="input w-full"
              name="contactInfo"
              placeholder="Mobile number"
              defaultValue={contactInfo}
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">availability</label>
            <input
              type="text"
              className="input w-full"
              name="availability"
              placeholder="availability"
              defaultValue={availability}
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">userEmail</label>
            <input
              type="email"
              className="input w-full"
              readOnly
              name="userEmail"
              placeholder="userEmail"
              defaultValue={userEmail}
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">userName</label>
            <input
              type="text"
              className="input w-full"
              name="userName"
              readOnly
              placeholder="userName"
              defaultValue={userName}
            />
          </fieldset>
        </div>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border py-4 my-6 px-4">
          <label className="label">Photo</label>
          <input
            type="text"
            className="input w-full"
            name="photoUrl"
            placeholder="photo Url"
            defaultValue={photoUrl}
          />
        </fieldset>

        <input className="w-full btn" type="submit" value="Add Post" />
      </form>
    </div>
  );
};

export default UpdateUser;
