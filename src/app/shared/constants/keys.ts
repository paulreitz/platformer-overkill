// String keys shouldn't be used directly in the code.
// Use constants instead. This prevents typo's for keys used in several places.
export const AssetKeys = {
    BACKGROUND: 'background',
    SPIKE: 'spike',
    PLAYER: 'player',
    TILE: 'tiles',
    MAP: 'map',
};

export const PlayerAnimationKeys = {
    WALK: 'walk',
    IDLE: 'idle',
    JUMP: 'jump',
};

// Layers exported from Tiled. This includes the name of the tile sheet that was set in Tiled.
export const MapLayerKeys = {
    PLATFORMS: 'Platforms',
    SPIKES: 'Spikes',
    TILE_SHEET: 'platformPack_tilesheet',
};
