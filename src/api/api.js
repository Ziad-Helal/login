export const registerFetch = async ({ first_name, last_name, email, password }) => {
    const url = "http://frontendapi00test.v6pohbale0-pxr4kozpq3gn.p.temp-site.link/api/create/user";

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    const body = JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
    });

    const request = new Request(url, {
        method: "POST",
        headers: headers,
        body: body,
    });

    const result = await fetch(request)
        .then((response) => response.json())
        .catch((error) => console.log(error));

    return result;
};

export const loginFetch = async ({ email, password }) => {
    const url = "http://frontendapi00test.v6pohbale0-pxr4kozpq3gn.p.temp-site.link/api/login";

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    const body = JSON.stringify({
        email: email,
        password: password,
    });

    const request = new Request(url, {
        method: "POST",
        headers: headers,
        body: body,
    });

    const result = await fetch(request)
        .then((response) => response.json())
        .catch((error) => console.log(error));

    return result;
};

export const getUsersListFetch = async () => {
    const url = "http://frontendapi00test.v6pohbale0-pxr4kozpq3gn.p.temp-site.link/api/users";

    const auth = localStorage.getItem("auth");

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Authorization", auth);

    const request = new Request(url, {
        method: "POST",
        headers: headers,
    });

    const result = await fetch(request)
        .then((response) => response.json())
        .catch((error) => console.log(error));

    return result;
};
