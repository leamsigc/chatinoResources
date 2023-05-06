declare namespace Lucia {
	type Auth = import("./base-auth").Auth;
	type UserAttributes = {
    email: string;
    username: string;
  };
}
