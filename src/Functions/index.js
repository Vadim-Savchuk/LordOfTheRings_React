const options = {
    headers: {
        Authorization: 'Bearer vJz3LWuko8KhZ0JRu8QY'
    }
}

// [] => network => [arr]_______________________+
export async function getResponseFetch(url) {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            console.error('Сталась помилка при запиті на сервер.', response.status);
            return false;
        }

        return await response.json();
    } catch (error) {
        console.error('Сталась помилка при запиті на сервер: ' + error);
        return false;
    }
}

// (async () => {
//     const response = await getResponseFetch(url);
//     console.log(response);
// })();
// ________________________________________________-