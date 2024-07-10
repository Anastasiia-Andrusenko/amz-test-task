
import css from './About.module.css';


const AboutPage: React.FC = () => {

    return <>
        <div className={css.container}>
            <h2 className={css.title}>This is a dashboard to display advertisements performance metrics</h2>
            <article className={css.article}>
              <p className={css.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec tellus dignissim, auctor eros in, fermentum nibh. Aenean ultrices suscipit bibendum. Maecenas finibus, neque iaculis finibus suscipit, lectus justo bibendum elit, condimentum eleifend ex tortor sit amet sapien. Nullam congue mollis sem. Integer dictum in turpis non interdum. Nam nec elit quam. Sed cursus auctor nunc, eu consequat lectus finibus a. Nam ac ante in nisl egestas venenatis. Vivamus in nunc hendrerit, ultricies mi ut, bibendum enim. Ut aliquam diam a rhoncus pretium. Fusce non magna bibendum massa posuere porta.</p>
              <p className={css.text}>In hac habitasse platea dictumst. Donec placerat turpis lorem, nec vestibulum ex scelerisque ut. Donec sit amet efficitur sem, eget gravida lorem. Etiam in ante neque. Maecenas accumsan in tortor et eleifend. Nam aliquet mi nisi, in laoreet risus iaculis vitae. Fusce ac sodales elit. Sed pharetra sollicitudin urna et interdum. Vestibulum rhoncus, purus ut gravida mollis, massa dolor auctor dui, et consequat lacus urna at purus. Curabitur molestie ex non tellus suscipit, vel finibus nulla sollicitudin. Integer at lectus dapibus ante tempor molestie. Nullam augue sapien, maximus id aliquet a, condimentum eu libero.</p>
            </article>
            <h3 className={css.titleSmth}>Lorem Ipsum</h3>
            <p className={css.smth}>
              Ut semper arcu nec sapien sodales, nec pulvinar arcu posuere. Quisque mollis eros erat, sed dignissim mauris eleifend eget. Donec sed dui laoreet est pharetra ullamcorper ut vitae mi. Aenean at bibendum tellus. 
            </p>
            <article className={css.article}>
              <p className={css.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec tellus dignissim, auctor eros in, fermentum nibh. Aenean ultrices suscipit bibendum. Maecenas finibus, neque iaculis finibus suscipit, lectus justo bibendum elit, condimentum eleifend ex tortor sit amet sapien. Nullam congue mollis sem. Integer dictum in turpis non interdum. Nam nec elit quam. Sed cursus auctor nunc, eu consequat lectus finibus a. Nam ac ante in nisl egestas venenatis. Vivamus in nunc hendrerit, ultricies mi ut, bibendum enim. Ut aliquam diam a rhoncus pretium. Fusce non magna bibendum massa posuere porta.</p>
              <p className={css.text}>In hac habitasse platea dictumst. Donec placerat turpis lorem, nec vestibulum ex scelerisque ut. Donec sit amet efficitur sem, eget gravida lorem. Etiam in ante neque. Maecenas accumsan in tortor et eleifend. Nam aliquet mi nisi, in laoreet risus iaculis vitae. Fusce ac sodales elit. Sed pharetra sollicitudin urna et interdum. Vestibulum rhoncus, purus ut gravida mollis, massa dolor auctor dui, et consequat lacus urna at purus. Curabitur molestie ex non tellus suscipit, vel finibus nulla sollicitudin. Integer at lectus dapibus ante tempor molestie. Nullam augue sapien, maximus id aliquet a, condimentum eu libero.</p>
            </article>
        </div>
    </>
};

export default AboutPage;