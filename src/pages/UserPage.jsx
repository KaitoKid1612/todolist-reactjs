const UserPage = () => {
  // eslint-disable-next-line no-unused-vars
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "leviet1612@gmail.com",
    },
    {
      id: 2,
      name: "Jane Doe2",
      email: "khoa@gmail.com",
    },
    {
      id: 3,
      name: "Jane Doe3",
      email: "khoa2@gmail.com",
    },
    {
      id: 4,
      name: "Jane Doe4",
      email: "khoa3@gmail.com",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl text-black text-center p-4">Users</h1>
      {/* This is an example component */}
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        First Name
                      </th>
                      {/* <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Last Name
                      </th> */}
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Active
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {users.map((user) => {
                      return (
                        <tr
                          key={user.id}
                          className="hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {user.name}
                          </td>
                          {/* <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                            {user.lastName}
                          </td> */}
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {user.email}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-start whitespace-nowrap">
                            <button className="bg-red-400 hover:bg-red-500 rounded-lg px-4 py-2 text-white shadow-sm text-xl m-2">
                              Delete
                            </button>

                            {/* <button
                              hidden={user.role == "ADMIN" ? true : false}
                              onClick={async () => {
                                const response = await custom_axios.delete(
                                  ApiConstants.USER.DELETE(user.id),
                                  {
                                    headers: {
                                      Authorization:
                                        "Bearer " +
                                        localStorage.getItem("token"),
                                    },
                                  }
                                );
                                getAllUsers();
                                toast.success("User Deleted Sucessfully!!");
                              }}
                              className="bg-red-400 hover:bg-red-500 rounded-lg px-4 py-2 text-white shadow-sm text-xl "
                            >
                              Delete
                            </button> */}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
