import {
  BuySkillActionResponse,
  ReceiveRewardActionResponse,
} from '@deities/apollo/ActionResponse.tsx';
import applyActionResponse from '@deities/apollo/actions/applyActionResponse.tsx';
import { fbt } from 'fbt';
import AnimationKey from '../../lib/AnimationKey.tsx';
import getSkillConfigForDisplay from '../../lib/getSkillConfigForDisplay.tsx';
import getTranslatedFactionName from '../../lib/getTranslatedFactionName.tsx';
import { Actions, State } from '../../Types.tsx';
import { resetBehavior } from '../Behavior.tsx';
import NullBehavior from '../NullBehavior.tsx';

export default async function buySkillAction(
  { requestFrame, update }: Actions,
  state: State,
  actionResponse: BuySkillActionResponse | ReceiveRewardActionResponse,
): Promise<State> {
  const { player } = actionResponse;
  const isBuy = actionResponse.type === 'BuySkill';
  const skill = isBuy
    ? actionResponse.skill
    : actionResponse.reward.type === 'Skill'
      ? actionResponse.reward.skill
      : null;

  if (!skill) {
    return state;
  }

  const { colors, name } = getSkillConfigForDisplay(skill);
  return new Promise((resolve) =>
    update((state) => ({
      animations: state.animations.set(new AnimationKey(), {
        color: colors,
        direction: 'up',
        length: 'long',
        onComplete: (state) => {
          requestFrame(() =>
            resolve({
              ...state,
              ...resetBehavior(),
            }),
          );
          return null;
        },
        player,
        sound: 'UI/Start',
        style: 'flashy',
        text: String(
          isBuy
            ? fbt(
                fbt.param(
                  'player',
                  getTranslatedFactionName(state.factionNames, player),
                ) +
                  ' bought the skill ' +
                  fbt.param('skill', name) +
                  '!',
                'Receive reward message',
              )
            : fbt(
                fbt.param(
                  'player',
                  getTranslatedFactionName(state.factionNames, player),
                ) +
                  ' received the skill ' +
                  fbt.param('skill', name) +
                  '!',
                'Receive reward message',
              ),
        ),
        type: 'banner',
      }),
      map: applyActionResponse(state.map, state.vision, actionResponse),
      ...resetBehavior(NullBehavior),
    })),
  );
}
