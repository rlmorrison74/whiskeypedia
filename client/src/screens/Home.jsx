import whiskeyarticleimage from "../assets/images/whiskeyarticleimage.jpg";
import malting from "../assets/images/malting.jpg";
import mashing from "../assets/images/mashing.jpg";
import fermentation from "../assets/images/fermentation.jpg";
import distillation from "../assets/images/distillation.png";
import distillation2 from "../assets/images/distillation2.jpg";
import aging from "../assets/images/aging.jpg";
import bottling from "../assets/images/bottling.jpg";
import "../styles/Screens/home.css";

export default function Home() {
  return (
    <div className="whiskeyprocess">
      <div className="intro">
        <p>
          Whiskey. Arguably, one of the greatest inventions to ever grace this
          fine Planet of ours. Whether it be barley based, corn, rye, or wheat,
          they are all unique and wonderful in their own way. Let’s take a look
          at how whiskey is made.{" "}
        </p>
        <img src={whiskeyarticleimage} alt="whiskey in decanter" />
      </div>
      <div className="malting">
        <h2>Malting</h2>
        <div className="card">
          <img src={malting} alt="malting" />
          <p>
            What starts out as raw grains, gets moistened, which allows it to
            germinate. It’s then heated to stop the germination process and
            begin drying again. The malting process is different for different
            types of whiskey, but most American whiskey typically uses rye and
            corn.
          </p>
        </div>
      </div>
      <div>
        <div className="mashing">
          <h2>Mashing</h2>
          <div className="card">
            <p>
              This is where the sugar is extracted from the grain or malt being
              used for the whiskey. The grains are ground up and mixed with hot
              water, which creates a porridge-like substance, referred to as
              mash. Once all the sugar has been extracted, the mash can be moved
              to the next stage.
            </p>
            <img src={mashing} alt="mashing" />
          </div>
        </div>
      </div>
      <div className="fermentation">
        <h2>Fermentation</h2>
        <div className="card">
          <img src={fermentation} alt="fermentation" />
          <p>
            The alcohol begins to form. The mash is combined with yeast, which
            feeds on the sugars in the mash, converting the sugar into alcohol.
            This usually takes a few days, give or take.{" "}
          </p>
        </div>
      </div>
      <div className="distillation">
        <h2>Distillation</h2>
        <div className="card">
          <p>
            Now that we’ve fermented, the liquid is heated into a vapor, then
            condensed back into a liquid, in a piece of equipment called a
            still. There are two main types of stills: pot and column. Column
            stills are used for bourbon, rye, and other American whiskeys, so
            we’ll focus on them. As the mash is fed into the hot still from the
            top, it heats up, vaporizing the alcohol and forcing it back up the
            still, while the water, grain, and solids, fall back to the bottom.
            Each time the vapors hit a plate within the still, they condense
            again, and leave heavier things (that are not alcohol) behind,
            leaving more pure alcohol behind. This is how we achieve a higher
            proof whiskey.
          </p>
          <div className="imgcontainer">
            <img src={distillation} alt="drawing of still" />
            <img src={distillation2} alt="still" />
          </div>
        </div>
      </div>
      <div className="aging">
        <h2>Aging</h2>
        <div className="card">
          <img src={aging} alt="aging whiskey" />
          <p>
            Nearly all whiskeys are aged in barrels, mostly oak. Bourbon, Rye,
            and some other American whiskeys are aged in new charred oak
            barrels, but some others use different barrels. A straight whiskey
            is required to have been barrel aged for no less than 2 years. There
            are a lot of requirements that go into classifying what type of
            whiskey you’re producing, but these are the barebones basics.
          </p>
        </div>
      </div>
      <div className="bottling">
        <h2>Bottling</h2>
        <div className="card">
          <p>
            Once the whiskey has finished aging, and is a minimum 40% alcohol
            (80 proof), it’s ready to be bottled. Often the whiskey will also be
            filtered as it’s bottled, to prevent clouding and debris.
          </p>
          <img src={bottling} alt="bottling" />
        </div>
      </div>
    </div>
  );
}
