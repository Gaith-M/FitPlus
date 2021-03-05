import Heading from '../../components/heading';
import { accent, space_4 } from '../../styles/styleConstants';
import Button from '../../components/button';
import Paragraph from '../../components/paragraph';
import Image from 'next/image';
import {
  Container,
  FlexContainer,
  FlexItem,
} from '../../components/shared-components/containers';

const index = () => {
  return (
    <Container>
      <Heading lvl={2}>
        What is <span style={{ color: accent, fontWeight: 'bold' }}>Fit+</span>?
      </Heading>

      <Paragraph>
        Find something else more interesting fart in owners food mrow. Ignore
        the human until she needs to get up, then climb on her lap and sprawl
        meow all night, for sugar, my siamese, stalks me (in a good way), day
        and night so jump launch to pounce upon little yarn mouse, bare fangs at
        toy run hide in litter box until treats are fed. Spend six hours per day
        washing, but still have a crusty butthole car rides are evil cuddle no
        cuddle cuddle love scratch scratch so kitty pounce, trip, faceplant you
        didn't see that no you didn't definitely didn't lick, lick, lick, and
        preen away the embarrassment get video posted to internet for chasing
        red dot put butt in owner's face. Love to play with owner's hair tie
        purr like an angel or i bet my nine lives on you-oooo-ooo-hooo, or paw
        at beetle and eat it before it gets away poop in litter box, scratch the
        walls. Cough furball into food bowl then scratch owner for a new one
        this is the day . Claw drapes munch, munch, chomp, chomp and ignore the
        squirrels, you'll never catch them anyway, claws in the eye of the
        beholder. Kitty time cats secretly make all the worlds muffins for run
        outside as soon as door open and massacre a bird in the living room and
        then look like the cutest and most innocent animal on the planet. Find
        something else more interesting fart in owners food mrow. Ignore the
        human until she needs to get up, then climb on her lap and sprawl meow
        all night, for sugar, my siamese, stalks me (in a good way), day and
        night so jump launch to pounce upon little yarn mouse, bare fangs at toy
        run hide in litter box until treats are fed. Spend six hours per day
        washing, but still have a crusty butthole car rides are evil cuddle no
        cuddle cuddle love scratch scratch so kitty pounce.
      </Paragraph>

      <Paragraph>
        Find something else more interesting fart in owners food mrow. Ignore
        the human until she needs to get up, then climb on her lap and sprawl
        meow all night, for sugar, my siamese, stalks me (in a good way), day
        and night so jump launch to pounce upon little yarn mouse, bare fangs at
        toy run hide in litter box until treats are fed. Spend six hours per day
        washing, but still have a crusty butthole car rides are evil cuddle no
        cuddle cuddle love scratch scratch so kitty pounce, trip, faceplant you
        didn't see that no you didn't definitely didn't lick, lick, lick, and
        preen away the embarrassment get video posted to internet for chasing
        red dot put butt in owner's face. Love to play with owner's hair tie
        purr like an angel or i bet my nine lives on you-oooo-ooo-hooo, or paw
        at beetle and eat it before it gets away poop in litter box, scratch the
        walls.
      </Paragraph>

      <FlexContainer
        wrap={true}
        justify='space-between'
        m={`${space_4} 0`}
        style={{
          textAlign: 'center',
          padding: '20px 0',
          fontWeight: 'bold',
        }}
      >
        <FlexItem flex='0 0 30%'>
          <Image src='/about_thumb.jpg' width={300} height={200} />
          <Paragraph>State of The Art</Paragraph>
        </FlexItem>
        <FlexItem flex='0 0 30%'>
          <Image src='/about_thumb_coach.jpg' width={300} height={200} />
          <Paragraph>Hot Coaches</Paragraph>
        </FlexItem>
        <FlexItem flex='0 0 30%'>
          <Image src='/about_thumb_doc.jpg' width={300} height={200} />
          <Paragraph>Medically Prepared just in case</Paragraph>
        </FlexItem>
      </FlexContainer>

      <FlexContainer wrap={true} justify='space-between' m={`${space_4} 0`}>
        <Button flex={49} p='20px'>
          Learn More
        </Button>
        <Button flex={49} p='20px'>
          Get in touch
        </Button>
      </FlexContainer>
    </Container>
  );
};

export default index;
