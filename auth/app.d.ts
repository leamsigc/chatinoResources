
declare namespace Lucia {
	type Auth = import("./base-auth").Auth;
	type UserAttributes = {
    email: string;
    username: string;
    email_verified:boolean;
    role_id: string;
  };
}
