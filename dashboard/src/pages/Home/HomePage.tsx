
import css from './Home.module.css';

const HomePage: React.FC = () => {

    return <>
        <div className={css.main}>
            <div className={css.container}>

                  <p className={css.welcome}>
                    Welcome  Welcome  Welcome  Welcome  Welcome
                  </p>
              <div className={css.hero}>
                <h1 className={css.title}>Advertisements Performance Dashboard</h1>
              </div>
              <article className={css.article}>
                <p className={css.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec tellus dignissim, auctor eros in, fermentum nibh. Aenean ultrices suscipit bibendum. Maecenas finibus, neque iaculis finibus suscipit, lectus justo bibendum elit, condimentum eleifend ex tortor sit amet sapien. Nullam congue mollis sem. Integer dictum in turpis non interdum. Nam nec elit quam. Sed cursus auctor nunc, eu consequat lectus finibus a. Nam ac ante in nisl egestas venenatis. Vivamus in nunc hendrerit, ultricies mi ut, bibendum enim. Ut aliquam diam a rhoncus pretium. Fusce non magna bibendum massa posuere porta.
                </p>
                <p className={css.text}>
                  In hac habitasse platea dictumst. Donec placerat turpis lorem, nec vestibulum ex scelerisque ut. Donec sit amet efficitur sem, eget gravida lorem. Etiam in ante neque. Maecenas accumsan in tortor et eleifend. Nam aliquet mi nisi, in laoreet risus iaculis vitae. Fusce ac sodales elit. Sed pharetra sollicitudin urna et interdum. Vestibulum rhoncus, purus ut gravida mollis, massa dolor auctor dui, et consequat lacus urna at purus. Curabitur molestie ex non tellus suscipit, vel finibus nulla sollicitudin. Integer at lectus dapibus ante tempor molestie. Nullam augue sapien, maximus id aliquet a, condimentum eu libero.
                </p>
                <p className={css.text}>
                Cras ut risus condimentum, consequat enim blandit, volutpat arcu. Nulla vitae urna pharetra, gravida quam at, vehicula magna. Pellentesque sit amet quam laoreet, rutrum est sit amet, consectetur nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus lobortis justo arcu, ut tincidunt odio tincidunt non. Suspendisse condimentum libero vitae malesuada ultricies. Etiam at elit facilisis, ornare metus id, rhoncus sem. Mauris aliquet lorem eu ligula fringilla egestas. Fusce tristique metus lacus, ut lacinia diam rhoncus vitae. Nullam ut suscipit odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi tincidunt efficitur feugiat. Donec augue metus, convallis sit amet imperdiet id, ultricies vehicula massa. Curabitur rhoncus quam non luctus sollicitudin. Sed ac tellus vel ante viverra semper in gravida augue.
                </p>
                <p className={css.text}>
                Vestibulum in sodales nulla. Proin ex urna, commodo a sagittis in, rhoncus eget nisl. Ut consectetur eleifend justo, at vulputate augue volutpat ut. In hac habitasse platea dictumst. Ut et dolor quis diam egestas dapibus vitae nec orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque varius faucibus pulvinar. In pulvinar ac neque in laoreet. Sed eget tempus odio. Curabitur sodales commodo ex hendrerit luctus. Proin venenatis orci mauris, eu volutpat elit dictum in. Sed sit amet tempus ex. Praesent imperdiet quis urna eget finibus. Morbi pretium nisl sed ipsum interdum congue.
                </p>
              </article>
            </div>
        </div>
    </>
};

export default HomePage;