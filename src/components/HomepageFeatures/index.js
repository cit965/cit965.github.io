import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '自学',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        你不需要任何计算机基础，你只需要努力、认证、花时间就够了。此前那种有劲没处使的感觉，那种付出在多时间也得不到回报的感觉，从此烟消云散。
      </>
    ),
  },
  {
    title: '免费',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        机构几万高昂的学费，让你望而却步，我是南哥，陪你一起学习，一起坚持，改变你的人生轨迹。
      </>
    ),
  },
  {
    title: '愿景',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        终有一天，我们中国技术要引领世界，让我们一起提升工程师的社会地位和幸福感，不再996.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
