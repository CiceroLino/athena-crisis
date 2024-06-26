import { SpriteVariant } from '@deities/athena/info/SpriteVariants.tsx';
import { Biome } from '@deities/athena/map/Biome.tsx';
import { PlainDynamicPlayerID } from '@deities/athena/map/Player.tsx';
import { HEX } from '@nkzw/palette-swap';
import { Palette } from './VariantConfiguration.tsx';

export type SpriteVariantDetail = Readonly<{
  source: string;
  staticColors?: Set<HEX>;
  variants: Map<PlainDynamicPlayerID | Biome, Palette>;
}>;

export default new Map<SpriteVariant, SpriteVariantDetail | null>([
  ['Buildings', null],
  ['Building-Create', null],
  ['NavalExplosion', null],
  ['Label', null],
  ['Rescue', null],
  ['Spawn', null],
  ['Units-AcidBomber', null],
  ['Portraits', null],
  ['Units-AntiAir', null],
  ['Units-HeavyArtillery', null],
  ['Units-Dragon', null],
  ['Units-Bomber', null],
  ['Units-BattleShip', null],
  ['Units-Octopus', null],
  ['AttackOctopus', null],
  ['Units-Drone', null],
  ['Units-FighterJet', null],
  ['Units-Helicopter', null],
  ['Units-Pioneer', null],
  ['Units-Infantry', null],
  ['Units-RocketLauncher', null],
  ['Units-BazookaBear', null],
  ['Units-Alien', null],
  ['Units-Zombie', null],
  ['Units-Ogre', null],
  ['Units-Brute', null],
  ['Units-Commander', null],
  ['Units-Dinosaur', null],
  ['Units-Bear', null],
  ['Units-Flamethrower', null],
  ['Units-AIU', null],
  ['Units-APU', null],
  ['Units-SuperAPU', null],
  ['Units-Saboteur', null],
  ['Units-Jetpack', null],
  ['Units-Sniper', null],
  ['Units-Jeep', null],
  ['Units-Truck', null],
  ['Units-Lander', null],
  ['Units-Amphibious', null],
  ['Units-Frigate', null],
  ['Units-Destroyer', null],
  ['Units-Hovercraft', null],
  ['Units-SmallHovercraft', null],
  ['Units-SupportShip', null],
  ['Units-Corvette', null],
  ['Units-Mammoth', null],
  ['Units-TransportTrain', null],
  ['Units-SupplyTrain', null],
  ['Units-MobileArtillery', null],
  ['Units-Cannon', null],
  ['Units-Medic', null],
  ['Units-ReconDrone', null],
  ['Units-Humvee', null],
  ['Units-HumveeAvenger', null],
  ['Units-ArtilleryHumvee', null],
  ['Units-SeaPatrol', null],
  ['Units-XFighter', null],
  ['Units-SmallTank', null],
  ['Units-HeavyTank', null],
  ['Units-SuperTank', null],
  ['Units-TransportHelicopter', null],
  ['BuildingsShadow', null],
  ['StructuresShadow', null],
  ['Decorators', null],
] as const);
