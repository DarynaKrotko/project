import './NotFound.css'

const NotFoundPage = () => {

    return (
        <div className={'notFound'}>
            <h1>Нічого не знайдено</h1>
            <div><img src="/images/not-found.jpg" alt="" width={400} height={400}/></div>
        </div>
    );
};

export {NotFoundPage};