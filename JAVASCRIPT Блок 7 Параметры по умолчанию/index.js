const createPost = (title, text, date) => {
    return {
        title: title,
        text: text,
        date: date
    }
}

const post = createPost('Скоро новый год!', 'Скоро будет 2020!', '20.12.2019')
console.log(post)