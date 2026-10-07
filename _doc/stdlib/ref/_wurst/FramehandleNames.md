---
title: FramehandleNames
layout: stdlibref
category: _wurst
categoryLabel: Core Language
tags:
  - wurst
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_wurst/assets/FramehandleNames.wurst'
generated: true
toc: sections
---

These default frames templates can be created with createFrame(..) [BlzCreateFrame]

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_wurst/assets/FramehandleNames.wurst)**

## Classes

### FramehandleTypeNames

```wurst
public class FramehandleTypeNames
```

These are the default base frame types, to be used as typeName for createFrameByType(..) [BlzCreateFrameByType] 
	or inside of the frame definition files (fdf)

**Members:**

- <a id="FramehandleTypeNames-buttonframe"></a> `static constant buttonframe = "BUTTON"`
  The frame type BUTTON is used for normal clickable button
- <a id="FramehandleTypeNames-gluebutton"></a> `static constant gluebutton = "GLUEBUTTON"`
  The frame type GLUEBUTTON is used for clickable button, mouse hovering glows.
- <a id="FramehandleTypeNames-textbutton"></a> `static constant textbutton = "TEXTBUTTON"`
  The frame type TEXTBUTTON is used for clickable TextButtons with text
- <a id="FramehandleTypeNames-gluetextbutton"></a> `static constant gluetextbutton = "GLUETEXTBUTTON"`
  The frame type GLUETEXTBUTTON is used for clickable TextButtons, mouse hovering glows.
- <a id="FramehandleTypeNames-text"></a> `static constant text = "TEXT"`
  The frame type TEXT is used for visible text.
- <a id="FramehandleTypeNames-backdrop"></a> `static constant backdrop = "BACKDROP"`
  The frame type BACKDROP is used for backgrounds, borders or images.
- <a id="FramehandleTypeNames-editbox"></a> `static constant editbox = "EDITBOX"`
  The frame type EDITBOX is used for text input by user.
- <a id="FramehandleTypeNames-slider"></a> `static constant slider = "SLIDER"`
  The frame type SLIDER is used for user can select a value between an upper and a lower Value.
- <a id="FramehandleTypeNames-textarea"></a> `static constant textarea = "TEXTAREA"`
  The frame type TEXTAREA is used for ui-Frames for big Texts also include scrollbars on default.
- <a id="FramehandleTypeNames-checkbox"></a> `static constant checkbox = "CHECKBOX"`
  The frame type CHECKBOX is used for checkable checkbox
- <a id="FramehandleTypeNames-gluecheckbox"></a> `static constant gluecheckbox = "GLUECHECKBOX"`
  The frame type GLUECHECKBOX is used for checkable checkbox, mouse hovering glows.
- <a id="FramehandleTypeNames-popupmenu"></a> `static constant popupmenu = "POPUPMENU"`
  The frame type POPUPMENU is used for used for menus that is desinged for hovering over other frames
- <a id="FramehandleTypeNames-menu"></a> `static constant menu = "MENU"`
  The frame type MENU is used for general menu frame designed to be displayed behind popupmenus
- <a id="FramehandleTypeNames-scrollbar"></a> `static constant scrollbar = "SCROLLBAR"`
  The frame type SCROLLBAR is used for scrollbar that can be added to backgrops do change content (e.g. for textareas)
- <a id="FramehandleTypeNames-control"></a> `static constant control = "CONTROL"`
  The frame type CONTROL is used for special frame that is designed for handling several control elements like buttons, checkboxes etc.
- <a id="FramehandleTypeNames-simpleframe"></a> `static constant simpleframe = "SIMPLEFRAME"`
  The frame type SIMPLEFRAME is used for a less complex definition for frames, that does not allow different inherit types
- <a id="FramehandleTypeNames-simplebutton"></a> `static constant simplebutton = "SIMPLEBUTTON"`
  The SimpleFrame type SIMPLEBUTTON is used for clickable SimpleFrame buttons.
- <a id="FramehandleTypeNames-simplestatusbar"></a> `static constant simplestatusbar = "SIMPLESTATUSBAR"`
  The SimpleFrame type SIMPLESTATUSBAR is used for SimpleFrame status bars.
- <a id="FramehandleTypeNames-simplecheckbox"></a> `static constant simplecheckbox = "SIMPLECHECKBOX"`
  The SimpleFrame type SIMPLECHECKBOX is used for SimpleFrame checkboxes.
- <a id="FramehandleTypeNames-stringframe"></a> `static constant stringframe = "String"`
  The SimpleFrame child type String is used for text children of SimpleFrames.
  		Do not treat these children like generic frames; several BlzFrame* natives can crash on them.
- <a id="FramehandleTypeNames-textureframe"></a> `static constant textureframe = "Texture"`
  The SimpleFrame child type Texture is used for texture children of SimpleFrames.
  		Do not treat these children like generic frames; several BlzFrame* natives can crash on them.
- <a id="FramehandleTypeNames-dialogframe"></a> `static constant dialogframe = "DIALOG"`
  The frame type DIALOG is used for nothing special, (origin SuspendDialogs will pause the game in singleplayer)
- <a id="FramehandleTypeNames-highlight"></a> `static constant highlight = "HIGHLIGHT"`
  The frame type HIGHLIGHT is used for frame template to define how buttons/texts are hightlingt on hovering/click/enter/focus of the mouse

### FramehandleDefaultNames

```wurst
public class FramehandleDefaultNames
```

These default frames can be obtained with getFrameByName(..) [BlzGetFrameByName]
	(the createContext (subframe-id) parameter is by default 0, some frames does contain subframes)

**Members:**

- <a id="FramehandleDefaultNames-allianceAcceptButton"></a> `static constant allianceAcceptButton = "AllianceAcceptButton"`
- <a id="FramehandleDefaultNames-allianceAcceptButtonText"></a> `static constant allianceAcceptButtonText = "AllianceAcceptButtonText"`
- <a id="FramehandleDefaultNames-allianceBackdrop"></a> `static constant allianceBackdrop = "AllianceBackdrop"`
- <a id="FramehandleDefaultNames-allianceCancelButton"></a> `static constant allianceCancelButton = "AllianceCancelButton"`
- <a id="FramehandleDefaultNames-allianceCancelButtonText"></a> `static constant allianceCancelButtonText = "AllianceCancelButtonText"`
- <a id="FramehandleDefaultNames-allianceDialog"></a> `static constant allianceDialog = "AllianceDialog"`
- <a id="FramehandleDefaultNames-allianceDialogScrollBar"></a> `static constant allianceDialogScrollBar = "AllianceDialogScrollBar"`
- <a id="FramehandleDefaultNames-allianceSlot"></a> `static constant allianceSlot = "AllianceSlot"`
  The framehandle name allianceSlot has the subframes [0 to 23]
- <a id="FramehandleDefaultNames-allianceTitle"></a> `static constant allianceTitle = "AllianceTitle"`
- <a id="FramehandleDefaultNames-alliedVictoryCheckBox"></a> `static constant alliedVictoryCheckBox = "AlliedVictoryCheckBox"`
- <a id="FramehandleDefaultNames-alliedVictoryLabel"></a> `static constant alliedVictoryLabel = "AlliedVictoryLabel"`
- <a id="FramehandleDefaultNames-allyCheckBox"></a> `static constant allyCheckBox = "AllyCheckBox"`
  The framehandle name allyCheckBox has the subframes [0 to 23]
- <a id="FramehandleDefaultNames-allyHeader"></a> `static constant allyHeader = "AllyHeader"`
- <a id="FramehandleDefaultNames-ambientCheckBox"></a> `static constant ambientCheckBox = "AmbientCheckBox"`
- <a id="FramehandleDefaultNames-ambientLabel"></a> `static constant ambientLabel = "AmbientLabel"`
- <a id="FramehandleDefaultNames-animQualityLabel"></a> `static constant animQualityLabel = "AnimQualityLabel"`
- <a id="FramehandleDefaultNames-animQualityValue"></a> `static constant animQualityValue = "AnimQualityValue"`
- <a id="FramehandleDefaultNames-bottomButtonPanel"></a> `static constant bottomButtonPanel = "BottomButtonPanel"`
- <a id="FramehandleDefaultNames-buttonBackdropTemplate"></a> `static constant buttonBackdropTemplate = "ButtonBackdropTemplate"`
- <a id="FramehandleDefaultNames-buttonDisabledBackdropTemplate"></a> `static constant buttonDisabledBackdropTemplate = "ButtonDisabledBackdropTemplate"`
- <a id="FramehandleDefaultNames-buttonDisabledPushedBackdropTemplate"></a> `static constant buttonDisabledPushedBackdropTemplate = "ButtonDisabledPushedBackdropTemplate"`
- <a id="FramehandleDefaultNames-buttonPushedBackdropTemplate"></a> `static constant buttonPushedBackdropTemplate = "ButtonPushedBackdropTemplate"`
- <a id="FramehandleDefaultNames-cancelButtonText"></a> `static constant cancelButtonText = "CancelButtonText"`
- <a id="FramehandleDefaultNames-cinematicBottomBorder"></a> `static constant cinematicBottomBorder = "CinematicBottomBorder"`
- <a id="FramehandleDefaultNames-cinematicDialogueText"></a> `static constant cinematicDialogueText = "CinematicDialogueText"`
- <a id="FramehandleDefaultNames-cinematicPanel"></a> `static constant cinematicPanel = "CinematicPanel"`
- <a id="FramehandleDefaultNames-cinematicPortrait"></a> `static constant cinematicPortrait = "CinematicPortrait"`
- <a id="FramehandleDefaultNames-cinematicPortraitBackground"></a> `static constant cinematicPortraitBackground = "CinematicPortraitBackground"`
- <a id="FramehandleDefaultNames-cinematicPortraitCover"></a> `static constant cinematicPortraitCover = "CinematicPortraitCover"`
- <a id="FramehandleDefaultNames-cinematicScenePanel"></a> `static constant cinematicScenePanel = "CinematicScenePanel"`
- <a id="FramehandleDefaultNames-cinematicSpeakerText"></a> `static constant cinematicSpeakerText = "CinematicSpeakerText"`
- <a id="FramehandleDefaultNames-cinematicTopBorder"></a> `static constant cinematicTopBorder = "CinematicTopBorder"`
- <a id="FramehandleDefaultNames-colorBackdrop"></a> `static constant colorBackdrop = "ColorBackdrop"`
  The framehandle name colorBackdrop has the subframes [0 to 23]
- <a id="FramehandleDefaultNames-colorBorder"></a> `static constant colorBorder = "ColorBorder"`
  The framehandle name colorBorder has the subframes [0 to 23]
- <a id="FramehandleDefaultNames-commandBarFrame"></a> `static constant commandBarFrame = "CommandBarFrame"`
  Container of the 12 command card buttons (1.32+). See commandButton(index) for the buttons.
- `static function commandButton(int index) returns string`
  Name of a command card button, index 0 to 11 (1.32+): 0 is the top-left (0,0) button, 11 the
  		bottom-right (3,2). Move/hide via these named frames, not ORIGIN_FRAME_COMMAND_BUTTON (moving
  		the origin frames glitches in 1.32+). NOTE: command buttons reappear/update on every unit
  		selection, even while hidden via BlzHideOriginFrames - re-hide on selection if needed.
- <a id="FramehandleDefaultNames-confirmQuitCancelButton"></a> `static constant confirmQuitCancelButton = "ConfirmQuitCancelButton"`
- <a id="FramehandleDefaultNames-confirmQuitCancelButtonText"></a> `static constant confirmQuitCancelButtonText = "ConfirmQuitCancelButtonText"`
- <a id="FramehandleDefaultNames-confirmQuitMessageText"></a> `static constant confirmQuitMessageText = "ConfirmQuitMessageText"`
- <a id="FramehandleDefaultNames-confirmQuitPanel"></a> `static constant confirmQuitPanel = "ConfirmQuitPanel"`
- <a id="FramehandleDefaultNames-confirmQuitQuitButton"></a> `static constant confirmQuitQuitButton = "ConfirmQuitQuitButton"`
- <a id="FramehandleDefaultNames-confirmQuitQuitButtonText"></a> `static constant confirmQuitQuitButtonText = "ConfirmQuitQuitButtonText"`
- <a id="FramehandleDefaultNames-confirmQuitTitleText"></a> `static constant confirmQuitTitleText = "ConfirmQuitTitleText"`
- <a id="FramehandleDefaultNames-consoleBottomBar"></a> `static constant consoleBottomBar = "ConsoleBottomBar"`
  Reforged 2.0+: parent of the bottom console art (CommandBarFrame, info panel parent, idle worker,
  		ORIGIN_FRAME_UBERTOOLTIP are its children). Does not exist before 2.0 (getter returns null).
  		Hiding it also hides those children - reparent the ones you want to keep to ConsoleUI first.
- <a id="FramehandleDefaultNames-consoleTopBar"></a> `static constant consoleTopBar = "ConsoleTopBar"`
  Reforged 2.0+: parent of the top console art (resource bar / menu button background textures).
  		Does not exist before 2.0 (getter returns null).
- <a id="FramehandleDefaultNames-consoleUI"></a> `static constant consoleUI = "ConsoleUI"`
- <a id="FramehandleDefaultNames-consoleUIBackdrop"></a> `static constant consoleUIBackdrop = "ConsoleUIBackdrop"`
  Reforged+: the black BACKDROP behind the bottom console; NOT hidden by BlzHideOriginFrames and
  		it blocks mouse clicks. Standard treatment is collapsing it (setSize(0, 0.0001)) rather than
  		hiding: it stays useful as a console-level Frame parent (e.g. to move the minimap out of 4:3).
- <a id="FramehandleDefaultNames-customKeysLabel"></a> `static constant customKeysLabel = "CustomKeysLabel"`
- <a id="FramehandleDefaultNames-customKeysValue"></a> `static constant customKeysValue = "CustomKeysValue"`
- <a id="FramehandleDefaultNames-decoratedMapListBox"></a> `static constant decoratedMapListBox = "DecoratedMapListBox"`
- <a id="FramehandleDefaultNames-deleteCancelButton"></a> `static constant deleteCancelButton = "DeleteCancelButton"`
- <a id="FramehandleDefaultNames-deleteCancelButtonText"></a> `static constant deleteCancelButtonText = "DeleteCancelButtonText"`
- <a id="FramehandleDefaultNames-deleteDeleteButton"></a> `static constant deleteDeleteButton = "DeleteDeleteButton"`
- <a id="FramehandleDefaultNames-deleteDeleteButtonText"></a> `static constant deleteDeleteButtonText = "DeleteDeleteButtonText"`
- <a id="FramehandleDefaultNames-deleteMessageText"></a> `static constant deleteMessageText = "DeleteMessageText"`
- <a id="FramehandleDefaultNames-deleteOnly"></a> `static constant deleteOnly = "DeleteOnly"`
- <a id="FramehandleDefaultNames-deleteTitleText"></a> `static constant deleteTitleText = "DeleteTitleText"`
- <a id="FramehandleDefaultNames-difficultyLabel"></a> `static constant difficultyLabel = "DifficultyLabel"`
- <a id="FramehandleDefaultNames-difficultyValue"></a> `static constant difficultyValue = "DifficultyValue"`
- <a id="FramehandleDefaultNames-endGameButton"></a> `static constant endGameButton = "EndGameButton"`
- <a id="FramehandleDefaultNames-endGameButtonText"></a> `static constant endGameButtonText = "EndGameButtonText"`
- <a id="FramehandleDefaultNames-endGamePanel"></a> `static constant endGamePanel = "EndGamePanel"`
- <a id="FramehandleDefaultNames-endGameTitleText"></a> `static constant endGameTitleText = "EndGameTitleText"`
- <a id="FramehandleDefaultNames-enviroCheckBox"></a> `static constant enviroCheckBox = "EnviroCheckBox"`
- <a id="FramehandleDefaultNames-enviroLabel"></a> `static constant enviroLabel = "EnviroLabel"`
- <a id="FramehandleDefaultNames-escMenuBackdrop"></a> `static constant escMenuBackdrop = "EscMenuBackdrop"`
- <a id="FramehandleDefaultNames-escMenuDeleteContainer"></a> `static constant escMenuDeleteContainer = "EscMenuDeleteContainer"`
- <a id="FramehandleDefaultNames-escMenuMainPanel"></a> `static constant escMenuMainPanel = "EscMenuMainPanel"`
- <a id="FramehandleDefaultNames-escMenuOptionsPanel"></a> `static constant escMenuOptionsPanel = "EscMenuOptionsPanel"`
- <a id="FramehandleDefaultNames-escMenuOverwriteContainer"></a> `static constant escMenuOverwriteContainer = "EscMenuOverwriteContainer"`
- <a id="FramehandleDefaultNames-escMenuSaveGamePanel"></a> `static constant escMenuSaveGamePanel = "EscMenuSaveGamePanel"`
- <a id="FramehandleDefaultNames-escMenuSaveLoadContainer"></a> `static constant escMenuSaveLoadContainer = "EscMenuSaveLoadContainer"`
- <a id="FramehandleDefaultNames-escOptionsLightsMenu"></a> `static constant escOptionsLightsMenu = "EscOptionsLightsMenu"`
- <a id="FramehandleDefaultNames-escOptionsLightsPopupMenuArrow"></a> `static constant escOptionsLightsPopupMenuArrow = "EscOptionsLightsPopupMenuArrow"`
- <a id="FramehandleDefaultNames-escOptionsLightsPopupMenuBackdrop"></a> `static constant escOptionsLightsPopupMenuBackdrop = "EscOptionsLightsPopupMenuBackdrop"`
- <a id="FramehandleDefaultNames-escOptionsLightsPopupMenuDisabledBackdrop"></a> `static constant escOptionsLightsPopupMenuDisabledBackdrop = "EscOptionsLightsPopupMenuDisabledBackdrop"`
- <a id="FramehandleDefaultNames-escOptionsLightsPopupMenuMenu"></a> `static constant escOptionsLightsPopupMenuMenu = "EscOptionsLightsPopupMenuMenu"`
- <a id="FramehandleDefaultNames-escOptionsLightsPopupMenuTitle"></a> `static constant escOptionsLightsPopupMenuTitle = "EscOptionsLightsPopupMenuTitle"`
- <a id="FramehandleDefaultNames-escOptionsOcclusionMenu"></a> `static constant escOptionsOcclusionMenu = "EscOptionsOcclusionMenu"`
- <a id="FramehandleDefaultNames-escOptionsOcclusionPopupMenuArrow"></a> `static constant escOptionsOcclusionPopupMenuArrow = "EscOptionsOcclusionPopupMenuArrow"`
- <a id="FramehandleDefaultNames-escOptionsOcclusionPopupMenuBackdrop"></a> `static constant escOptionsOcclusionPopupMenuBackdrop = "EscOptionsOcclusionPopupMenuBackdrop"`
- <a id="FramehandleDefaultNames-escOptionsOcclusionPopupMenuDisabledBackdrop"></a> `static constant escOptionsOcclusionPopupMenuDisabledBackdrop = "EscOptionsOcclusionPopupMenuDisabledBackdrop"`
- <a id="FramehandleDefaultNames-escOptionsOcclusionPopupMenuMenu"></a> `static constant escOptionsOcclusionPopupMenuMenu = "EscOptionsOcclusionPopupMenuMenu"`
- <a id="FramehandleDefaultNames-escOptionsOcclusionPopupMenuTitle"></a> `static constant escOptionsOcclusionPopupMenuTitle = "EscOptionsOcclusionPopupMenuTitle"`
- <a id="FramehandleDefaultNames-escOptionsParticlesMenu"></a> `static constant escOptionsParticlesMenu = "EscOptionsParticlesMenu"`
- <a id="FramehandleDefaultNames-escOptionsParticlesPopupMenuArrow"></a> `static constant escOptionsParticlesPopupMenuArrow = "EscOptionsParticlesPopupMenuArrow"`
- <a id="FramehandleDefaultNames-escOptionsParticlesPopupMenuBackdrop"></a> `static constant escOptionsParticlesPopupMenuBackdrop = "EscOptionsParticlesPopupMenuBackdrop"`
- <a id="FramehandleDefaultNames-escOptionsParticlesPopupMenuDisabledBackdrop"></a> `static constant escOptionsParticlesPopupMenuDisabledBackdrop = "EscOptionsParticlesPopupMenuDisabledBackdrop"`
- <a id="FramehandleDefaultNames-escOptionsParticlesPopupMenuMenu"></a> `static constant escOptionsParticlesPopupMenuMenu = "EscOptionsParticlesPopupMenuMenu"`
- <a id="FramehandleDefaultNames-escOptionsParticlesPopupMenuTitle"></a> `static constant escOptionsParticlesPopupMenuTitle = "EscOptionsParticlesPopupMenuTitle"`
- <a id="FramehandleDefaultNames-escOptionsResolutionMenu"></a> `static constant escOptionsResolutionMenu = "EscOptionsResolutionMenu"`
- <a id="FramehandleDefaultNames-escOptionsResolutionPopupMenuArrow"></a> `static constant escOptionsResolutionPopupMenuArrow = "EscOptionsResolutionPopupMenuArrow"`
- <a id="FramehandleDefaultNames-escOptionsResolutionPopupMenuBackdrop"></a> `static constant escOptionsResolutionPopupMenuBackdrop = "EscOptionsResolutionPopupMenuBackdrop"`
- <a id="FramehandleDefaultNames-escOptionsResolutionPopupMenuDisabledBackdrop"></a> `static constant escOptionsResolutionPopupMenuDisabledBackdrop = "EscOptionsResolutionPopupMenuDisabledBackdrop"`
- <a id="FramehandleDefaultNames-escOptionsResolutionPopupMenuMenu"></a> `static constant escOptionsResolutionPopupMenuMenu = "EscOptionsResolutionPopupMenuMenu"`
- <a id="FramehandleDefaultNames-escOptionsResolutionPopupMenuTitle"></a> `static constant escOptionsResolutionPopupMenuTitle = "EscOptionsResolutionPopupMenuTitle"`
- <a id="FramehandleDefaultNames-escOptionsShadowsMenu"></a> `static constant escOptionsShadowsMenu = "EscOptionsShadowsMenu"`
- <a id="FramehandleDefaultNames-escOptionsShadowsPopupMenuArrow"></a> `static constant escOptionsShadowsPopupMenuArrow = "EscOptionsShadowsPopupMenuArrow"`
- <a id="FramehandleDefaultNames-escOptionsShadowsPopupMenuBackdrop"></a> `static constant escOptionsShadowsPopupMenuBackdrop = "EscOptionsShadowsPopupMenuBackdrop"`
- <a id="FramehandleDefaultNames-escOptionsShadowsPopupMenuDisabledBackdrop"></a> `static constant escOptionsShadowsPopupMenuDisabledBackdrop = "EscOptionsShadowsPopupMenuDisabledBackdrop"`
- <a id="FramehandleDefaultNames-escOptionsShadowsPopupMenuMenu"></a> `static constant escOptionsShadowsPopupMenuMenu = "EscOptionsShadowsPopupMenuMenu"`
- <a id="FramehandleDefaultNames-escOptionsShadowsPopupMenuTitle"></a> `static constant escOptionsShadowsPopupMenuTitle = "EscOptionsShadowsPopupMenuTitle"`
- <a id="FramehandleDefaultNames-escOptionsWindowModeMenu"></a> `static constant escOptionsWindowModeMenu = "EscOptionsWindowModeMenu"`
- <a id="FramehandleDefaultNames-escOptionsWindowModePopupMenuArrow"></a> `static constant escOptionsWindowModePopupMenuArrow = "EscOptionsWindowModePopupMenuArrow"`
- <a id="FramehandleDefaultNames-escOptionsWindowModePopupMenuBackdrop"></a> `static constant escOptionsWindowModePopupMenuBackdrop = "EscOptionsWindowModePopupMenuBackdrop"`
- <a id="FramehandleDefaultNames-escOptionsWindowModePopupMenuDisabledBackdrop"></a> `static constant escOptionsWindowModePopupMenuDisabledBackdrop = "EscOptionsWindowModePopupMenuDisabledBackdrop"`
- <a id="FramehandleDefaultNames-escOptionsWindowModePopupMenuMenu"></a> `static constant escOptionsWindowModePopupMenuMenu = "EscOptionsWindowModePopupMenuMenu"`
- <a id="FramehandleDefaultNames-escOptionsWindowModePopupMenuTitle"></a> `static constant escOptionsWindowModePopupMenuTitle = "EscOptionsWindowModePopupMenuTitle"`
- <a id="FramehandleDefaultNames-exitButton"></a> `static constant exitButton = "ExitButton"`
- <a id="FramehandleDefaultNames-exitButtonText"></a> `static constant exitButtonText = "ExitButtonText"`
- <a id="FramehandleDefaultNames-extraHighLatencyLabel"></a> `static constant extraHighLatencyLabel = "ExtraHighLatencyLabel"`
- <a id="FramehandleDefaultNames-extraHighLatencyRadio"></a> `static constant extraHighLatencyRadio = "ExtraHighLatencyRadio"`
- <a id="FramehandleDefaultNames-fileListFrame"></a> `static constant fileListFrame = "FileListFrame"`
- <a id="FramehandleDefaultNames-formationButton"></a> `static constant formationButton = "FormationButton"`
  The bottom minimap button (formation toggle), 1.32+. One of the five minimap buttons; see
  		miniMapButtonBar for the container and the inconsistent in-game casing of the others.
- <a id="FramehandleDefaultNames-formationToggleCheckBox"></a> `static constant formationToggleCheckBox = "FormationToggleCheckBox"`
- <a id="FramehandleDefaultNames-formationToggleLabel"></a> `static constant formationToggleLabel = "FormationToggleLabel"`
- <a id="FramehandleDefaultNames-gameplayButton"></a> `static constant gameplayButton = "GameplayButton"`
- <a id="FramehandleDefaultNames-gameplayButtonText"></a> `static constant gameplayButtonText = "GameplayButtonText"`
- <a id="FramehandleDefaultNames-gameplayPanel"></a> `static constant gameplayPanel = "GameplayPanel"`
- <a id="FramehandleDefaultNames-gameplayTitleText"></a> `static constant gameplayTitleText = "GameplayTitleText"`
- <a id="FramehandleDefaultNames-gameSpeedLabel"></a> `static constant gameSpeedLabel = "GameSpeedLabel"`
- <a id="FramehandleDefaultNames-gameSpeedSlider"></a> `static constant gameSpeedSlider = "GameSpeedSlider"`
- <a id="FramehandleDefaultNames-gameSpeedValue"></a> `static constant gameSpeedValue = "GameSpeedValue"`
- <a id="FramehandleDefaultNames-gammaBrightLabel"></a> `static constant gammaBrightLabel = "GammaBrightLabel"`
- <a id="FramehandleDefaultNames-gammaDarkLabel"></a> `static constant gammaDarkLabel = "GammaDarkLabel"`
- <a id="FramehandleDefaultNames-gammaLabel"></a> `static constant gammaLabel = "GammaLabel"`
- <a id="FramehandleDefaultNames-gammaSlider"></a> `static constant gammaSlider = "GammaSlider"`
- <a id="FramehandleDefaultNames-goldBackdrop"></a> `static constant goldBackdrop = "GoldBackdrop"`
  The framehandle name goldBackdrop has the subframes [0 to 23]
- <a id="FramehandleDefaultNames-goldHeader"></a> `static constant goldHeader = "GoldHeader"`
- <a id="FramehandleDefaultNames-goldText"></a> `static constant goldText = "GoldText"`
  The framehandle name goldText has the subframes [0 to 23]
- <a id="FramehandleDefaultNames-healthBarsCheckBox"></a> `static constant healthBarsCheckBox = "HealthBarsCheckBox"`
- <a id="FramehandleDefaultNames-healthBarsLabel"></a> `static constant healthBarsLabel = "HealthBarsLabel"`
- <a id="FramehandleDefaultNames-helpButton"></a> `static constant helpButton = "HelpButton"`
- <a id="FramehandleDefaultNames-helpButtonText"></a> `static constant helpButtonText = "HelpButtonText"`
- <a id="FramehandleDefaultNames-helpOKButton"></a> `static constant helpOKButton = "HelpOKButton"`
- <a id="FramehandleDefaultNames-helpOKButtonText"></a> `static constant helpOKButtonText = "HelpOKButtonText"`
- <a id="FramehandleDefaultNames-helpPanel"></a> `static constant helpPanel = "HelpPanel"`
- <a id="FramehandleDefaultNames-helpTextArea"></a> `static constant helpTextArea = "HelpTextArea"`
- <a id="FramehandleDefaultNames-helpTitleText"></a> `static constant helpTitleText = "HelpTitleText"`
- <a id="FramehandleDefaultNames-highLatencyLabel"></a> `static constant highLatencyLabel = "HighLatencyLabel"`
- <a id="FramehandleDefaultNames-highLatencyRadio"></a> `static constant highLatencyRadio = "HighLatencyRadio"`
- <a id="FramehandleDefaultNames-infoPanelIconAllyFoodIcon"></a> `static constant infoPanelIconAllyFoodIcon = "InfoPanelIconAllyFoodIcon"`
  The framehandle name infoPanelIconAllyFoodIcon has the subframe [7]
- <a id="FramehandleDefaultNames-infoPanelIconAllyFoodValue"></a> `static constant infoPanelIconAllyFoodValue = "InfoPanelIconAllyFoodValue"`
  The framehandle name infoPanelIconAllyFoodValue has the subframe [7]
- <a id="FramehandleDefaultNames-infoPanelIconAllyGoldIcon"></a> `static constant infoPanelIconAllyGoldIcon = "InfoPanelIconAllyGoldIcon"`
  The framehandle name infoPanelIconAllyGoldIcon has the subframe [7]
- <a id="FramehandleDefaultNames-infoPanelIconAllyGoldValue"></a> `static constant infoPanelIconAllyGoldValue = "InfoPanelIconAllyGoldValue"`
  The framehandle name infoPanelIconAllyGoldValue has the subframe [7]
- <a id="FramehandleDefaultNames-infoPanelIconAllyTitle"></a> `static constant infoPanelIconAllyTitle = "InfoPanelIconAllyTitle"`
  The framehandle name infoPanelIconAllyTitle has the subframe [7]
- <a id="FramehandleDefaultNames-infoPanelIconAllyUpkeep"></a> `static constant infoPanelIconAllyUpkeep = "InfoPanelIconAllyUpkeep"`
  The framehandle name infoPanelIconAllyUpkeep has the subframe [7]
- <a id="FramehandleDefaultNames-infoPanelIconAllyWoodIcon"></a> `static constant infoPanelIconAllyWoodIcon = "InfoPanelIconAllyWoodIcon"`
  The framehandle name infoPanelIconAllyWoodIcon has the subframe [7]
- <a id="FramehandleDefaultNames-infoPanelIconAllyWoodValue"></a> `static constant infoPanelIconAllyWoodValue = "InfoPanelIconAllyWoodValue"`
  The framehandle name infoPanelIconAllyWoodValue has the subframe [7]
- <a id="FramehandleDefaultNames-infoPanelIconBackdrop"></a> `static constant infoPanelIconBackdrop = "InfoPanelIconBackdrop"`
  The framehandle name infoPanelIconBackdrop has the subframes [0 to 5]
- <a id="FramehandleDefaultNames-infoPanelIconHeroAgilityLabel"></a> `static constant infoPanelIconHeroAgilityLabel = "InfoPanelIconHeroAgilityLabel"`
  The framehandle name infoPanelIconHeroAgilityLabel has the subframe [6]
- <a id="FramehandleDefaultNames-infoPanelIconHeroAgilityValue"></a> `static constant infoPanelIconHeroAgilityValue = "InfoPanelIconHeroAgilityValue"`
  The framehandle name infoPanelIconHeroAgilityValue has the subframe [6]
- <a id="FramehandleDefaultNames-infoPanelIconHeroIcon"></a> `static constant infoPanelIconHeroIcon = "InfoPanelIconHeroIcon"`
  The framehandle name infoPanelIconHeroIcon has the subframe [6]
- <a id="FramehandleDefaultNames-infoPanelIconHeroIntellectLabel"></a> `static constant infoPanelIconHeroIntellectLabel = "InfoPanelIconHeroIntellectLabel"`
  The framehandle name infoPanelIconHeroIntellectLabel has the subframe [6]
- <a id="FramehandleDefaultNames-infoPanelIconHeroIntellectValue"></a> `static constant infoPanelIconHeroIntellectValue = "InfoPanelIconHeroIntellectValue"`
  The framehandle name infoPanelIconHeroIntellectValue has the subframe [6]
- <a id="FramehandleDefaultNames-infoPanelIconHeroStrengthLabel"></a> `static constant infoPanelIconHeroStrengthLabel = "InfoPanelIconHeroStrengthLabel"`
  The framehandle name infoPanelIconHeroStrengthLabel has the subframe [6]
- <a id="FramehandleDefaultNames-infoPanelIconHeroStrengthValue"></a> `static constant infoPanelIconHeroStrengthValue = "InfoPanelIconHeroStrengthValue"`
  The framehandle name infoPanelIconHeroStrengthValue has the subframe [6]
- <a id="FramehandleDefaultNames-infoPanelIconLabel"></a> `static constant infoPanelIconLabel = "InfoPanelIconLabel"`
  The framehandle name infoPanelIconLabel has the subframes [0 to 5]
- <a id="FramehandleDefaultNames-infoPanelIconLevel"></a> `static constant infoPanelIconLevel = "InfoPanelIconLevel"`
  The framehandle name infoPanelIconLevel has the subframes [0 to 5]
- <a id="FramehandleDefaultNames-infoPanelIconValue"></a> `static constant infoPanelIconValue = "InfoPanelIconValue"`
  The framehandle name infoPanelIconValue has the subframes [0 to 5]
- <a id="FramehandleDefaultNames-insideConfirmQuitPanel"></a> `static constant insideConfirmQuitPanel = "InsideConfirmQuitPanel"`
- <a id="FramehandleDefaultNames-insideEndGamePanel"></a> `static constant insideEndGamePanel = "InsideEndGamePanel"`
- <a id="FramehandleDefaultNames-insideHelpPanel"></a> `static constant insideHelpPanel = "InsideHelpPanel"`
- <a id="FramehandleDefaultNames-insideMainPanel"></a> `static constant insideMainPanel = "InsideMainPanel"`
- <a id="FramehandleDefaultNames-insideTipsPanel"></a> `static constant insideTipsPanel = "InsideTipsPanel"`
- `static function inventoryButton(int index) returns string`
  Name of an inventory item button, index 0 to 5 (1.32+). Move/hide via these named frames, not
  		ORIGIN_FRAME_ITEM_BUTTON (moving the origin frames glitches in 1.32+). NOTE: like command
  		buttons, they reappear/update on every unit selection.
- <a id="FramehandleDefaultNames-inventoryCoverTexture"></a> `static constant inventoryCoverTexture = "InventoryCoverTexture"`
  Reforged 2.0+ texture covering the inventory area when no unit with inventory is selected.
  		Pre-2.0 this is simpleInventoryCover. Standard treatment: setAlpha(0).
- <a id="FramehandleDefaultNames-keyScrollFastLabel"></a> `static constant keyScrollFastLabel = "KeyScrollFastLabel"`
- <a id="FramehandleDefaultNames-keyScrollLabel"></a> `static constant keyScrollLabel = "KeyScrollLabel"`
- <a id="FramehandleDefaultNames-keyScrollSlider"></a> `static constant keyScrollSlider = "KeyScrollSlider"`
- <a id="FramehandleDefaultNames-keyScrollSlowLabel"></a> `static constant keyScrollSlowLabel = "KeyScrollSlowLabel"`
- <a id="FramehandleDefaultNames-latencyInfo1"></a> `static constant latencyInfo1 = "LatencyInfo1"`
- <a id="FramehandleDefaultNames-latencyInfo2"></a> `static constant latencyInfo2 = "LatencyInfo2"`
- <a id="FramehandleDefaultNames-leaderboardFrame"></a> `static constant leaderboardFrame = "Leaderboard"`
- <a id="FramehandleDefaultNames-leaderboardBackdrop"></a> `static constant leaderboardBackdrop = "LeaderboardBackdrop"`
- <a id="FramehandleDefaultNames-leaderboardListContainer"></a> `static constant leaderboardListContainer = "LeaderboardListContainer"`
- <a id="FramehandleDefaultNames-leaderboardTitle"></a> `static constant leaderboardTitle = "LeaderboardTitle"`
- <a id="FramehandleDefaultNames-lightsLabel"></a> `static constant lightsLabel = "LightsLabel"`
- <a id="FramehandleDefaultNames-loadGameButton"></a> `static constant loadGameButton = "LoadGameButton"`
- <a id="FramehandleDefaultNames-loadGameButtonText"></a> `static constant loadGameButtonText = "LoadGameButtonText"`
- <a id="FramehandleDefaultNames-loadGameCancelButton"></a> `static constant loadGameCancelButton = "LoadGameCancelButton"`
- <a id="FramehandleDefaultNames-loadGameCancelButtonText"></a> `static constant loadGameCancelButtonText = "LoadGameCancelButtonText"`
- <a id="FramehandleDefaultNames-loadGameLoadButton"></a> `static constant loadGameLoadButton = "LoadGameLoadButton"`
- <a id="FramehandleDefaultNames-loadGameLoadButtonText"></a> `static constant loadGameLoadButtonText = "LoadGameLoadButtonText"`
- <a id="FramehandleDefaultNames-loadGameTitleText"></a> `static constant loadGameTitleText = "LoadGameTitleText"`
- <a id="FramehandleDefaultNames-loadOnly"></a> `static constant loadOnly = "LoadOnly"`
- <a id="FramehandleDefaultNames-logArea"></a> `static constant logArea = "LogArea"`
- <a id="FramehandleDefaultNames-logAreaBackdrop"></a> `static constant logAreaBackdrop = "LogAreaBackdrop"`
- <a id="FramehandleDefaultNames-logAreaScrollBar"></a> `static constant logAreaScrollBar = "LogAreaScrollBar"`
- <a id="FramehandleDefaultNames-logBackdrop"></a> `static constant logBackdrop = "LogBackdrop"`
- <a id="FramehandleDefaultNames-logDialog"></a> `static constant logDialog = "LogDialog"`
- <a id="FramehandleDefaultNames-logOkButton"></a> `static constant logOkButton = "LogOkButton"`
- <a id="FramehandleDefaultNames-logOkButtonText"></a> `static constant logOkButtonText = "LogOkButtonText"`
- <a id="FramehandleDefaultNames-logTitle"></a> `static constant logTitle = "LogTitle"`
- <a id="FramehandleDefaultNames-lowLatencyLabel"></a> `static constant lowLatencyLabel = "LowLatencyLabel"`
- <a id="FramehandleDefaultNames-lowLatencyRadio"></a> `static constant lowLatencyRadio = "LowLatencyRadio"`
- <a id="FramehandleDefaultNames-lumberBackdrop"></a> `static constant lumberBackdrop = "LumberBackdrop"`
  The framehandle name lumberBackdrop has the subframes [0 to 23]
- <a id="FramehandleDefaultNames-lumberHeader"></a> `static constant lumberHeader = "LumberHeader"`
- <a id="FramehandleDefaultNames-lumberText"></a> `static constant lumberText = "LumberText"`
  The framehandle name lumberText has the subframes [0 to 23]
- <a id="FramehandleDefaultNames-mainPanel"></a> `static constant mainPanel = "MainPanel"`
- <a id="FramehandleDefaultNames-mapListBoxBackdrop"></a> `static constant mapListBoxBackdrop = "MapListBoxBackdrop"`
- <a id="FramehandleDefaultNames-mapListScrollBar"></a> `static constant mapListScrollBar = "MapListScrollBar"`
- <a id="FramehandleDefaultNames-miniMapAllyButton"></a> `static constant miniMapAllyButton = "MiniMapAllyButton"`
  Minimap ally-filter button (1.32+). Casing of the five minimap buttons is inconsistent in-game;
  		these constants reproduce it exactly. Individual buttons can only be shown while their container
  		miniMapButtonBar is visible.
- <a id="FramehandleDefaultNames-miniMapButtonBar"></a> `static constant miniMapButtonBar = "MiniMapButtonBar"`
  Container of the five minimap buttons (ConsoleUI child [4], 1.32.6+ via name). Buttons top to
  		bottom: minimapSignalButton, miniMapTerrainButton, miniMapAllyButton, miniMapCreepButton,
  		formationButton (= ORIGIN_FRAME_MINIMAP_BUTTON 0 to 4).
- <a id="FramehandleDefaultNames-miniMapCreepButton"></a> `static constant miniMapCreepButton = "MiniMapCreepButton"`
  Minimap creep-camp filter button (1.32+).
- <a id="FramehandleDefaultNames-miniMapFrame"></a> `static constant miniMapFrame = "MiniMapFrame"`
  The minimap (1.32+); equal to ORIGIN_FRAME_MINIMAP. Quirk: repositioning it a SECOND time in
  		1.31.1 desyncs minimap clicks from the visual (clicks act relative to the first position).
- <a id="FramehandleDefaultNames-minimapSignalButton"></a> `static constant minimapSignalButton = "MinimapSignalButton"`
  Minimap ping/signal button (1.32+). Note the lowercase 'm' in "Minimap": in-game casing.
- <a id="FramehandleDefaultNames-miniMapTerrainButton"></a> `static constant miniMapTerrainButton = "MiniMapTerrainButton"`
  Minimap terrain-toggle button (1.32+).
- <a id="FramehandleDefaultNames-modelDetailLabel"></a> `static constant modelDetailLabel = "ModelDetailLabel"`
- <a id="FramehandleDefaultNames-modelDetailValue"></a> `static constant modelDetailValue = "ModelDetailValue"`
- <a id="FramehandleDefaultNames-mouseScrollDisable"></a> `static constant mouseScrollDisable = "MouseScrollDisable"`
- <a id="FramehandleDefaultNames-mouseScrollDisableLabel"></a> `static constant mouseScrollDisableLabel = "MouseScrollDisableLabel"`
- <a id="FramehandleDefaultNames-mouseScrollFastLabel"></a> `static constant mouseScrollFastLabel = "MouseScrollFastLabel"`
- <a id="FramehandleDefaultNames-mouseScrollLabel"></a> `static constant mouseScrollLabel = "MouseScrollLabel"`
- <a id="FramehandleDefaultNames-mouseScrollSlider"></a> `static constant mouseScrollSlider = "MouseScrollSlider"`
- <a id="FramehandleDefaultNames-mouseScrollSlowLabel"></a> `static constant mouseScrollSlowLabel = "MouseScrollSlowLabel"`
- <a id="FramehandleDefaultNames-movementCheckBox"></a> `static constant movementCheckBox = "MovementCheckBox"`
- <a id="FramehandleDefaultNames-movementLabel"></a> `static constant movementLabel = "MovementLabel"`
- <a id="FramehandleDefaultNames-multiboardFrame"></a> `static constant multiboardFrame = "Multiboard"`
- <a id="FramehandleDefaultNames-multiboardBackdrop"></a> `static constant multiboardBackdrop = "MultiboardBackdrop"`
- <a id="FramehandleDefaultNames-multiboardListContainer"></a> `static constant multiboardListContainer = "MultiboardListContainer"`
- <a id="FramehandleDefaultNames-multiboardMinimizeButton"></a> `static constant multiboardMinimizeButton = "MultiboardMinimizeButton"`
- <a id="FramehandleDefaultNames-multiboardTitle"></a> `static constant multiboardTitle = "MultiboardTitle"`
- <a id="FramehandleDefaultNames-multiboardTitleBackdrop"></a> `static constant multiboardTitleBackdrop = "MultiboardTitleBackdrop"`
- <a id="FramehandleDefaultNames-musicCheckBox"></a> `static constant musicCheckBox = "MusicCheckBox"`
- <a id="FramehandleDefaultNames-musicVolumeHighLabel"></a> `static constant musicVolumeHighLabel = "MusicVolumeHighLabel"`
- <a id="FramehandleDefaultNames-musicVolumeLabel"></a> `static constant musicVolumeLabel = "MusicVolumeLabel"`
- <a id="FramehandleDefaultNames-musicVolumeLowLabel"></a> `static constant musicVolumeLowLabel = "MusicVolumeLowLabel"`
- <a id="FramehandleDefaultNames-musicVolumeSlider"></a> `static constant musicVolumeSlider = "MusicVolumeSlider"`
- <a id="FramehandleDefaultNames-networkButton"></a> `static constant networkButton = "NetworkButton"`
- <a id="FramehandleDefaultNames-networkButtonText"></a> `static constant networkButtonText = "NetworkButtonText"`
- <a id="FramehandleDefaultNames-networkLabel"></a> `static constant networkLabel = "NetworkLabel"`
- <a id="FramehandleDefaultNames-networkPanel"></a> `static constant networkPanel = "NetworkPanel"`
- <a id="FramehandleDefaultNames-networkTitleText"></a> `static constant networkTitleText = "NetworkTitleText"`
- <a id="FramehandleDefaultNames-observerCameraCheckBox"></a> `static constant observerCameraCheckBox = "ObserverCameraCheckBox"`
- <a id="FramehandleDefaultNames-observerCameraString"></a> `static constant observerCameraString = "ObserverCameraString"`
- <a id="FramehandleDefaultNames-observerFogCheckBox"></a> `static constant observerFogCheckBox = "ObserverFogCheckBox"`
- <a id="FramehandleDefaultNames-observerFogString"></a> `static constant observerFogString = "ObserverFogString"`
- <a id="FramehandleDefaultNames-observerVisionMenu"></a> `static constant observerVisionMenu = "ObserverVisionMenu"`
- <a id="FramehandleDefaultNames-observerVisionMenuArrow"></a> `static constant observerVisionMenuArrow = "ObserverVisionMenuArrow"`
- <a id="FramehandleDefaultNames-observerVisionMenuBackdrop"></a> `static constant observerVisionMenuBackdrop = "ObserverVisionMenuBackdrop"`
- <a id="FramehandleDefaultNames-observerVisionMenuDisabledBackdrop"></a> `static constant observerVisionMenuDisabledBackdrop = "ObserverVisionMenuDisabledBackdrop"`
- <a id="FramehandleDefaultNames-observerVisionMenuTitle"></a> `static constant observerVisionMenuTitle = "ObserverVisionMenuTitle"`
- <a id="FramehandleDefaultNames-observerVisionPopupMenu"></a> `static constant observerVisionPopupMenu = "ObserverVisionPopupMenu"`
- <a id="FramehandleDefaultNames-observerVisionPopupMenuMenuBackdropTemplate"></a> `static constant observerVisionPopupMenuMenuBackdropTemplate = "ObserverVisionPopupMenuMenuBackdropTemplate"`
- <a id="FramehandleDefaultNames-occlusionLabel"></a> `static constant occlusionLabel = "OcclusionLabel"`
- <a id="FramehandleDefaultNames-oKButtonText"></a> `static constant oKButtonText = "OKButtonText"`
- <a id="FramehandleDefaultNames-optionsButton"></a> `static constant optionsButton = "OptionsButton"`
- <a id="FramehandleDefaultNames-optionsButtonText"></a> `static constant optionsButtonText = "OptionsButtonText"`
- <a id="FramehandleDefaultNames-optionsCancelButton"></a> `static constant optionsCancelButton = "OptionsCancelButton"`
- <a id="FramehandleDefaultNames-optionsOKButton"></a> `static constant optionsOKButton = "OptionsOKButton"`
- <a id="FramehandleDefaultNames-optionsPanel"></a> `static constant optionsPanel = "OptionsPanel"`
- <a id="FramehandleDefaultNames-optionsPreviousButton"></a> `static constant optionsPreviousButton = "OptionsPreviousButton"`
- <a id="FramehandleDefaultNames-optionsPreviousButtonText"></a> `static constant optionsPreviousButtonText = "OptionsPreviousButtonText"`
- <a id="FramehandleDefaultNames-optionsTitleText"></a> `static constant optionsTitleText = "OptionsTitleText"`
- <a id="FramehandleDefaultNames-overwriteCancelButton"></a> `static constant overwriteCancelButton = "OverwriteCancelButton"`
- <a id="FramehandleDefaultNames-overwriteCancelButtonText"></a> `static constant overwriteCancelButtonText = "OverwriteCancelButtonText"`
- <a id="FramehandleDefaultNames-overwriteMessageText"></a> `static constant overwriteMessageText = "OverwriteMessageText"`
- <a id="FramehandleDefaultNames-overwriteOnly"></a> `static constant overwriteOnly = "OverwriteOnly"`
- <a id="FramehandleDefaultNames-overwriteOverwriteButton"></a> `static constant overwriteOverwriteButton = "OverwriteOverwriteButton"`
- <a id="FramehandleDefaultNames-overwriteOverwriteButtonText"></a> `static constant overwriteOverwriteButtonText = "OverwriteOverwriteButtonText"`
- <a id="FramehandleDefaultNames-overwriteTitleText"></a> `static constant overwriteTitleText = "OverwriteTitleText"`
- <a id="FramehandleDefaultNames-particlesLabel"></a> `static constant particlesLabel = "ParticlesLabel"`
- <a id="FramehandleDefaultNames-pauseButton"></a> `static constant pauseButton = "PauseButton"`
- <a id="FramehandleDefaultNames-pauseButtonText"></a> `static constant pauseButtonText = "PauseButtonText"`
- <a id="FramehandleDefaultNames-playerNameLabel"></a> `static constant playerNameLabel = "PlayerNameLabel"`
  The framehandle name playerNameLabel has the subframes [0 to 23]
- <a id="FramehandleDefaultNames-playersHeader"></a> `static constant playersHeader = "PlayersHeader"`
- <a id="FramehandleDefaultNames-positionalCheckBox"></a> `static constant positionalCheckBox = "PositionalCheckBox"`
- <a id="FramehandleDefaultNames-positionalLabel"></a> `static constant positionalLabel = "PositionalLabel"`
- <a id="FramehandleDefaultNames-previousButton"></a> `static constant previousButton = "PreviousButton"`
- <a id="FramehandleDefaultNames-previousButtonText"></a> `static constant previousButtonText = "PreviousButtonText"`
- <a id="FramehandleDefaultNames-providerLabel"></a> `static constant providerLabel = "ProviderLabel"`
- <a id="FramehandleDefaultNames-providerValue"></a> `static constant providerValue = "ProviderValue"`
- <a id="FramehandleDefaultNames-quitButton"></a> `static constant quitButton = "QuitButton"`
- <a id="FramehandleDefaultNames-quitButtonText"></a> `static constant quitButtonText = "QuitButtonText"`
- <a id="FramehandleDefaultNames-resolutionLabel"></a> `static constant resolutionLabel = "ResolutionLabel"`
- <a id="FramehandleDefaultNames-resourceBarFrame"></a> `static constant resourceBarFrame = "ResourceBarFrame"`
- <a id="FramehandleDefaultNames-resourceBarGoldText"></a> `static constant resourceBarGoldText = "ResourceBarGoldText"`
- <a id="FramehandleDefaultNames-resourceBarLumberText"></a> `static constant resourceBarLumberText = "ResourceBarLumberText"`
- <a id="FramehandleDefaultNames-resourceBarSupplyText"></a> `static constant resourceBarSupplyText = "ResourceBarSupplyText"`
- <a id="FramehandleDefaultNames-resourceBarUpkeepText"></a> `static constant resourceBarUpkeepText = "ResourceBarUpkeepText"`
- <a id="FramehandleDefaultNames-resourceTradingTitle"></a> `static constant resourceTradingTitle = "ResourceTradingTitle"`
- <a id="FramehandleDefaultNames-restartButton"></a> `static constant restartButton = "RestartButton"`
- <a id="FramehandleDefaultNames-restartButtonText"></a> `static constant restartButtonText = "RestartButtonText"`
- <a id="FramehandleDefaultNames-returnButton"></a> `static constant returnButton = "ReturnButton"`
- <a id="FramehandleDefaultNames-returnButtonText"></a> `static constant returnButtonText = "ReturnButtonText"`
- <a id="FramehandleDefaultNames-saveAndLoad"></a> `static constant saveAndLoad = "SaveAndLoad"`
- <a id="FramehandleDefaultNames-saveGameButton"></a> `static constant saveGameButton = "SaveGameButton"`
- <a id="FramehandleDefaultNames-saveGameButtonText"></a> `static constant saveGameButtonText = "SaveGameButtonText"`
- <a id="FramehandleDefaultNames-saveGameCancelButton"></a> `static constant saveGameCancelButton = "SaveGameCancelButton"`
- <a id="FramehandleDefaultNames-saveGameCancelButtonText"></a> `static constant saveGameCancelButtonText = "SaveGameCancelButtonText"`
- <a id="FramehandleDefaultNames-saveGameDeleteButton"></a> `static constant saveGameDeleteButton = "SaveGameDeleteButton"`
- <a id="FramehandleDefaultNames-saveGameDeleteButtonText"></a> `static constant saveGameDeleteButtonText = "SaveGameDeleteButtonText"`
- <a id="FramehandleDefaultNames-saveGameFileEditBox"></a> `static constant saveGameFileEditBox = "SaveGameFileEditBox"`
- <a id="FramehandleDefaultNames-saveGameFileEditBoxText"></a> `static constant saveGameFileEditBoxText = "SaveGameFileEditBoxText"`
- <a id="FramehandleDefaultNames-saveGameSaveButton"></a> `static constant saveGameSaveButton = "SaveGameSaveButton"`
- <a id="FramehandleDefaultNames-saveGameSaveButtonText"></a> `static constant saveGameSaveButtonText = "SaveGameSaveButtonText"`
- <a id="FramehandleDefaultNames-saveGameTitleText"></a> `static constant saveGameTitleText = "SaveGameTitleText"`
- <a id="FramehandleDefaultNames-saveOnly"></a> `static constant saveOnly = "SaveOnly"`
- <a id="FramehandleDefaultNames-shadowsLabel"></a> `static constant shadowsLabel = "ShadowsLabel"`
- <a id="FramehandleDefaultNames-simpleBuildingActionLabel"></a> `static constant simpleBuildingActionLabel = "SimpleBuildingActionLabel"`
  The framehandle name simpleBuildingActionLabel has the subframes [0, 1]
- <a id="FramehandleDefaultNames-simpleBuildingDescriptionValue"></a> `static constant simpleBuildingDescriptionValue = "SimpleBuildingDescriptionValue"`
  The framehandle name simpleBuildingDescriptionValue has the subframe [1]
- <a id="FramehandleDefaultNames-simpleBuildingNameValue"></a> `static constant simpleBuildingNameValue = "SimpleBuildingNameValue"`
  The framehandle name simpleBuildingNameValue has the subframe [1]
- <a id="FramehandleDefaultNames-simpleBuildQueueBackdrop"></a> `static constant simpleBuildQueueBackdrop = "SimpleBuildQueueBackdrop"`
  The framehandle name simpleBuildQueueBackdrop has the subframe [1]
- <a id="FramehandleDefaultNames-simpleBuildTimeIndicator"></a> `static constant simpleBuildTimeIndicator = "SimpleBuildTimeIndicator"`
  The framehandle name simpleBuildTimeIndicator has the subframes [0, 1]
- <a id="FramehandleDefaultNames-simpleClassValue"></a> `static constant simpleClassValue = "SimpleClassValue"`
- <a id="FramehandleDefaultNames-simpleDestructableNameValue"></a> `static constant simpleDestructableNameValue = "SimpleDestructableNameValue"`
- <a id="FramehandleDefaultNames-simpleHeroLevelBar"></a> `static constant simpleHeroLevelBar = "SimpleHeroLevelBar"`
  The framehandle name simpleHeroLevelBar has the subframe [4]
- <a id="FramehandleDefaultNames-simpleHoldDescriptionValue"></a> `static constant simpleHoldDescriptionValue = "SimpleHoldDescriptionValue"`
  The framehandle name simpleHoldDescriptionValue has the subframe [2]
- <a id="FramehandleDefaultNames-simpleHoldNameValue"></a> `static constant simpleHoldNameValue = "SimpleHoldNameValue"`
  The framehandle name simpleHoldNameValue has the subframe [2]
- <a id="FramehandleDefaultNames-simpleInfoPanelBuildingDetail"></a> `static constant simpleInfoPanelBuildingDetail = "SimpleInfoPanelBuildingDetail"`
  The framehandle name simpleInfoPanelBuildingDetail has the subframe [1]
- <a id="FramehandleDefaultNames-simpleInfoPanelCargoDetail"></a> `static constant simpleInfoPanelCargoDetail = "SimpleInfoPanelCargoDetail"`
  The framehandle name simpleInfoPanelCargoDetail has the subframe [2]
- <a id="FramehandleDefaultNames-simpleInfoPanelDestructableDetail"></a> `static constant simpleInfoPanelDestructableDetail = "SimpleInfoPanelDestructableDetail"`
  The framehandle name simpleInfoPanelDestructableDetail has the subframe [4]
- <a id="FramehandleDefaultNames-simpleInfoPanelIconAlly"></a> `static constant simpleInfoPanelIconAlly = "SimpleInfoPanelIconAlly"`
  The framehandle name simpleInfoPanelIconArmor has the subframe [7]
- <a id="FramehandleDefaultNames-simpleInfoPanelIconArmor"></a> `static constant simpleInfoPanelIconArmor = "SimpleInfoPanelIconArmor"`
  The framehandle name simpleInfoPanelIconArmor has the subframe [2]
- <a id="FramehandleDefaultNames-simpleInfoPanelIconDamage"></a> `static constant simpleInfoPanelIconDamage = "SimpleInfoPanelIconDamage"`
  The framehandle name SimpleInfoPanelIconDamage has the subframe [0, 1]
- <a id="FramehandleDefaultNames-simpleInfoPanelIconFood"></a> `static constant simpleInfoPanelIconFood = "SimpleInfoPanelIconFood"`
  The framehandle name simpleInfoPanelIconFood has the subframe [4]
- <a id="FramehandleDefaultNames-simpleInfoPanelIconGold"></a> `static constant simpleInfoPanelIconGold = "SimpleInfoPanelIconGold"`
  The framehandle name simpleInfoPanelIconGold has the subframe [5]
- <a id="FramehandleDefaultNames-simpleInfoPanelIconHero"></a> `static constant simpleInfoPanelIconHero = "SimpleInfoPanelIconHero"`
  The framehandle name simpleInfoPanelIconHero has the subframe [6]
- <a id="FramehandleDefaultNames-simpleInfoPanelIconHeroText"></a> `static constant simpleInfoPanelIconHeroText = "SimpleInfoPanelIconHeroText"`
  The framehandle name simpleInfoPanelIconHeroText has the subframe [6]
- <a id="FramehandleDefaultNames-simpleInfoPanelIconRank"></a> `static constant simpleInfoPanelIconRank = "SimpleInfoPanelIconRank"`
  The framehandle name simpleInfoPanelIconRank has the subframe [3]
- <a id="FramehandleDefaultNames-simpleInfoPanelItemDetail"></a> `static constant simpleInfoPanelItemDetail = "SimpleInfoPanelItemDetail"`
  The framehandle name simpleInfoPanelItemDetail has the subframe [3]
- <a id="FramehandleDefaultNames-simpleInfoPanelUnitDetail"></a> `static constant simpleInfoPanelUnitDetail = "SimpleInfoPanelUnitDetail"`
- <a id="FramehandleDefaultNames-simpleInventoryCover"></a> `static constant simpleInventoryCover = "SimpleInventoryCover"`
  Pre-2.0 texture covering the inventory area when no unit with inventory is selected; Reforged
  		2.0+ uses inventoryCoverTexture instead. Standard treatment: setAlpha(0).
- <a id="FramehandleDefaultNames-simpleItemDescriptionValue"></a> `static constant simpleItemDescriptionValue = "SimpleItemDescriptionValue"`
  The framehandle name simpleItemDescriptionValue has the subframe [3]
- <a id="FramehandleDefaultNames-simpleItemNameValue"></a> `static constant simpleItemNameValue = "SimpleItemNameValue"`
  The framehandle name simpleItemNameValue has the subframe [3]
- <a id="FramehandleDefaultNames-simpleNameValue"></a> `static constant simpleNameValue = "SimpleNameValue"`
- <a id="FramehandleDefaultNames-simpleObserverPanel"></a> `static constant simpleObserverPanel = "SimpleObserverPanel"`
- <a id="FramehandleDefaultNames-simpleProgressIndicator"></a> `static constant simpleProgressIndicator = "SimpleProgressIndicator"`
- <a id="FramehandleDefaultNames-simpleUnitStatsPanel"></a> `static constant simpleUnitStatsPanel = "SimpleUnitStatsPanel"`
- <a id="FramehandleDefaultNames-soundButton"></a> `static constant soundButton = "SoundButton"`
- <a id="FramehandleDefaultNames-soundButtonText"></a> `static constant soundButtonText = "SoundButtonText"`
- <a id="FramehandleDefaultNames-soundCheckBox"></a> `static constant soundCheckBox = "SoundCheckBox"`
- <a id="FramehandleDefaultNames-soundPanel"></a> `static constant soundPanel = "SoundPanel"`
- <a id="FramehandleDefaultNames-soundTitleText"></a> `static constant soundTitleText = "SoundTitleText"`
- <a id="FramehandleDefaultNames-soundVolumeHighLabel"></a> `static constant soundVolumeHighLabel = "SoundVolumeHighLabel"`
- <a id="FramehandleDefaultNames-soundVolumeLabel"></a> `static constant soundVolumeLabel = "SoundVolumeLabel"`
- <a id="FramehandleDefaultNames-soundVolumeLowLabel"></a> `static constant soundVolumeLowLabel = "SoundVolumeLowLabel"`
- <a id="FramehandleDefaultNames-soundVolumeSlider"></a> `static constant soundVolumeSlider = "SoundVolumeSlider"`
- <a id="FramehandleDefaultNames-subgroupCheckBox"></a> `static constant subgroupCheckBox = "SubgroupCheckBox"`
- <a id="FramehandleDefaultNames-subgroupLabel"></a> `static constant subgroupLabel = "SubgroupLabel"`
- <a id="FramehandleDefaultNames-subtitlesCheckBox"></a> `static constant subtitlesCheckBox = "SubtitlesCheckBox"`
- <a id="FramehandleDefaultNames-subtitlesLabel"></a> `static constant subtitlesLabel = "SubtitlesLabel"`
- <a id="FramehandleDefaultNames-textureQualityLabel"></a> `static constant textureQualityLabel = "TextureQualityLabel"`
- <a id="FramehandleDefaultNames-textureQualityValue"></a> `static constant textureQualityValue = "TextureQualityValue"`
- <a id="FramehandleDefaultNames-tipsBackButton"></a> `static constant tipsBackButton = "TipsBackButton"`
- <a id="FramehandleDefaultNames-tipsBackButtonText"></a> `static constant tipsBackButtonText = "TipsBackButtonText"`
- <a id="FramehandleDefaultNames-tipsButton"></a> `static constant tipsButton = "TipsButton"`
- <a id="FramehandleDefaultNames-tipsButtonText"></a> `static constant tipsButtonText = "TipsButtonText"`
- <a id="FramehandleDefaultNames-tipsNextButton"></a> `static constant tipsNextButton = "TipsNextButton"`
- <a id="FramehandleDefaultNames-tipsNextButtonText"></a> `static constant tipsNextButtonText = "TipsNextButtonText"`
- <a id="FramehandleDefaultNames-tipsOKButton"></a> `static constant tipsOKButton = "TipsOKButton"`
- <a id="FramehandleDefaultNames-tipsOKButtonText"></a> `static constant tipsOKButtonText = "TipsOKButtonText"`
- <a id="FramehandleDefaultNames-tipsPanel"></a> `static constant tipsPanel = "TipsPanel"`
- <a id="FramehandleDefaultNames-tipsTextArea"></a> `static constant tipsTextArea = "TipsTextArea"`
- <a id="FramehandleDefaultNames-tipsTitleText"></a> `static constant tipsTitleText = "TipsTitleText"`
- <a id="FramehandleDefaultNames-tooltipsCheckBox"></a> `static constant tooltipsCheckBox = "TooltipsCheckBox"`
- <a id="FramehandleDefaultNames-tooltipsLabel"></a> `static constant tooltipsLabel = "TooltipsLabel"`
- <a id="FramehandleDefaultNames-unitCheckBox"></a> `static constant unitCheckBox = "UnitCheckBox"`
- <a id="FramehandleDefaultNames-unitLabel"></a> `static constant unitLabel = "UnitLabel"`
- <a id="FramehandleDefaultNames-unitsCheckBox"></a> `static constant unitsCheckBox = "UnitsCheckBox"`
  The framehandle name unitsCheckBox has the subframes [o t 23]
- <a id="FramehandleDefaultNames-unitsHeader"></a> `static constant unitsHeader = "UnitsHeader"`
- <a id="FramehandleDefaultNames-upperButtonBarAlliesButton"></a> `static constant upperButtonBarAlliesButton = "UpperButtonBarAlliesButton"`
- <a id="FramehandleDefaultNames-upperButtonBarChatButton"></a> `static constant upperButtonBarChatButton = "UpperButtonBarChatButton"`
- <a id="FramehandleDefaultNames-upperButtonBarFrame"></a> `static constant upperButtonBarFrame = "UpperButtonBarFrame"`
- <a id="FramehandleDefaultNames-upperButtonBarMenuButton"></a> `static constant upperButtonBarMenuButton = "UpperButtonBarMenuButton"`
- <a id="FramehandleDefaultNames-upperButtonBarQuestsButton"></a> `static constant upperButtonBarQuestsButton = "UpperButtonBarQuestsButton"`
- <a id="FramehandleDefaultNames-videoButton"></a> `static constant videoButton = "VideoButton"`
- <a id="FramehandleDefaultNames-videoButtonText"></a> `static constant videoButtonText = "VideoButtonText"`
- <a id="FramehandleDefaultNames-videoPanel"></a> `static constant videoPanel = "VideoPanel"`
- <a id="FramehandleDefaultNames-videoTitleText"></a> `static constant videoTitleText = "VideoTitleText"`
- <a id="FramehandleDefaultNames-visionCheckBox"></a> `static constant visionCheckBox = "VisionCheckBox"`
  The framehandle name VisionCheckBox has the subframes [o t 23]
- <a id="FramehandleDefaultNames-visionHeader"></a> `static constant visionHeader = "VisionHeader"`
- <a id="FramehandleDefaultNames-vSyncCheckBox"></a> `static constant vSyncCheckBox = "VSyncCheckBox"`
- <a id="FramehandleDefaultNames-vSyncLabel"></a> `static constant vSyncLabel = "VSyncLabel"`
- <a id="FramehandleDefaultNames-windowModeLabel"></a> `static constant windowModeLabel = "WindowModeLabel"`
- <a id="FramehandleDefaultNames-wouldTheRealOptionsTitleTextPleaseStandUp"></a> `static constant wouldTheRealOptionsTitleTextPleaseStandUp = "WouldTheRealOptionsTitleTextPleaseStandUp"`

### FramehandleNames

```wurst
public class FramehandleNames
```

**Members:**

- <a id="FramehandleNames-adBanner"></a> `static constant adBanner = "AdBanner"`
- <a id="FramehandleNames-advancedOptionsDisplay"></a> `static constant advancedOptionsDisplay = "AdvancedOptionsDisplay"`
- <a id="FramehandleNames-advancedOptionsPane"></a> `static constant advancedOptionsPane = "AdvancedOptionsPane"`
- <a id="FramehandleNames-advancedPopupMenuTemplate"></a> `static constant advancedPopupMenuTemplate = "AdvancedPopupMenuTemplate"`
- <a id="FramehandleNames-allianceDialog"></a> `static constant allianceDialog = "AllianceDialog"`
- <a id="FramehandleNames-allianceSlot"></a> `static constant allianceSlot = "AllianceSlot"`
- <a id="FramehandleNames-battleNetChatActionMenu"></a> `static constant battleNetChatActionMenu = "BattleNetChatActionMenu"`
- <a id="FramehandleNames-battleNetChatPanel"></a> `static constant battleNetChatPanel = "BattleNetChatPanel"`
- <a id="FramehandleNames-battleNetChatroom"></a> `static constant battleNetChatroom = "BattleNetChatroom"`
- <a id="FramehandleNames-battleNetClanInvitation"></a> `static constant battleNetClanInvitation = "BattleNetClanInvitation"`
- <a id="FramehandleNames-battleNetClanInviteDialog"></a> `static constant battleNetClanInviteDialog = "BattleNetClanInviteDialog"`
- <a id="FramehandleNames-battleNetClanMateListBox"></a> `static constant battleNetClanMateListBox = "BattleNetClanMateListBox"`
- <a id="FramehandleNames-battleNetClanPane"></a> `static constant battleNetClanPane = "BattleNetClanPane"`
- <a id="FramehandleNames-battleNetConnectDialog"></a> `static constant battleNetConnectDialog = "BattleNetConnectDialog"`
- <a id="FramehandleNames-battleNetCustomCreatePanel"></a> `static constant battleNetCustomCreatePanel = "BattleNetCustomCreatePanel"`
- <a id="FramehandleNames-battleNetCustomFilterDialog"></a> `static constant battleNetCustomFilterDialog = "BattleNetCustomFilterDialog"`
- <a id="FramehandleNames-battleNetCustomJoinPanel"></a> `static constant battleNetCustomJoinPanel = "BattleNetCustomJoinPanel"`
- <a id="FramehandleNames-battleNetCustomLoadPanel"></a> `static constant battleNetCustomLoadPanel = "BattleNetCustomLoadPanel"`
- <a id="FramehandleNames-battleNetFriendsListBox"></a> `static constant battleNetFriendsListBox = "BattleNetFriendsListBox"`
- <a id="FramehandleNames-battleNetFriendsPane"></a> `static constant battleNetFriendsPane = "BattleNetFriendsPane"`
- <a id="FramehandleNames-battleNetHelpDialog"></a> `static constant battleNetHelpDialog = "BattleNetHelpDialog"`
- <a id="FramehandleNames-battleNetIconSelectBox"></a> `static constant battleNetIconSelectBox = "BattleNetIconSelectBox"`
- <a id="FramehandleNames-battleNetIconSelectDialog"></a> `static constant battleNetIconSelectDialog = "BattleNetIconSelectDialog"`
- <a id="FramehandleNames-battleNetMainFrame"></a> `static constant battleNetMainFrame = "BattleNetMainFrame"`
- <a id="FramehandleNames-battleNetMatchmakerPanel"></a> `static constant battleNetMatchmakerPanel = "BattleNetMatchmakerPanel"`
- <a id="FramehandleNames-battleNetMatchmakerPendingInviteDialog"></a> `static constant battleNetMatchmakerPendingInviteDialog = "BattleNetMatchmakerPendingInviteDialog"`
- <a id="FramehandleNames-battleNetMatchmakerTeamInviteDialog"></a> `static constant battleNetMatchmakerTeamInviteDialog = "BattleNetMatchmakerTeamInviteDialog"`
- <a id="FramehandleNames-battleNetNewsBox"></a> `static constant battleNetNewsBox = "BattleNetNewsBox"`
- <a id="FramehandleNames-battleNetPatchDialog"></a> `static constant battleNetPatchDialog = "BattleNetPatchDialog"`
- <a id="FramehandleNames-battleNetProfileListBox"></a> `static constant battleNetProfileListBox = "BattleNetProfileListBox"`
- <a id="FramehandleNames-battleNetProfileListItem"></a> `static constant battleNetProfileListItem = "BattleNetProfileListItem"`
- <a id="FramehandleNames-battleNetProfilePanel"></a> `static constant battleNetProfilePanel = "BattleNetProfilePanel"`
- <a id="FramehandleNames-battleNetScheduledGame"></a> `static constant battleNetScheduledGame = "BattleNetScheduledGame"`
- <a id="FramehandleNames-battleNetStandardPanel"></a> `static constant battleNetStandardPanel = "BattleNetStandardPanel"`
- <a id="FramehandleNames-battleNetStatusBox"></a> `static constant battleNetStatusBox = "BattleNetStatusBox"`
- <a id="FramehandleNames-battleNetTeamInvitation"></a> `static constant battleNetTeamInvitation = "BattleNetTeamInvitation"`
- <a id="FramehandleNames-battleNetTeamInviteDialog"></a> `static constant battleNetTeamInviteDialog = "BattleNetTeamInviteDialog"`
- <a id="FramehandleNames-battleNetTeamPanel"></a> `static constant battleNetTeamPanel = "BattleNetTeamPanel"`
- <a id="FramehandleNames-battleNetUserListBox"></a> `static constant battleNetUserListBox = "BattleNetUserListBox"`
- <a id="FramehandleNames-bNetPopupMenuBackdropTemplate"></a> `static constant bNetPopupMenuBackdropTemplate = "BNetPopupMenuBackdropTemplate"`
- <a id="FramehandleNames-bNetPopupMenuTemplate"></a> `static constant bNetPopupMenuTemplate = "BNetPopupMenuTemplate"`
- <a id="FramehandleNames-browserButton"></a> `static constant browserButton = "BrowserButton"`
- <a id="FramehandleNames-browserFrame"></a> `static constant browserFrame = "BrowserFrame"`
- <a id="FramehandleNames-campaignListBox"></a> `static constant campaignListBox = "CampaignListBox"`
- <a id="FramehandleNames-campaignMenu"></a> `static constant campaignMenu = "CampaignMenu"`
- <a id="FramehandleNames-chatDialog"></a> `static constant chatDialog = "ChatDialog"`
- <a id="FramehandleNames-checkListBox"></a> `static constant checkListBox = "CheckListBox"`
- <a id="FramehandleNames-cinematicPanel"></a> `static constant cinematicPanel = "CinematicPanel"`
- <a id="FramehandleNames-clanButtonBackdropTemplate"></a> `static constant clanButtonBackdropTemplate = "ClanButtonBackdropTemplate"`
- <a id="FramehandleNames-clanButtonDisabledBackdropTemplate"></a> `static constant clanButtonDisabledBackdropTemplate = "ClanButtonDisabledBackdropTemplate"`
- <a id="FramehandleNames-clanButtonDisabledPushedBackdropTemplate"></a> `static constant clanButtonDisabledPushedBackdropTemplate = "ClanButtonDisabledPushedBackdropTemplate"`
- <a id="FramehandleNames-clanButtonFocusHighlightBackdropTemplate"></a> `static constant clanButtonFocusHighlightBackdropTemplate = "ClanButtonFocusHighlightBackdropTemplate"`
- <a id="FramehandleNames-clanButtonMouseOverHighlightBackdropTemplate"></a> `static constant clanButtonMouseOverHighlightBackdropTemplate = "ClanButtonMouseOverHighlightBackdropTemplate"`
- <a id="FramehandleNames-clanButtonPushedBackdropTemplate"></a> `static constant clanButtonPushedBackdropTemplate = "ClanButtonPushedBackdropTemplate"`
- <a id="FramehandleNames-clanButtonTemplate"></a> `static constant clanButtonTemplate = "ClanButtonTemplate"`
- <a id="FramehandleNames-customCampaignMenu"></a> `static constant customCampaignMenu = "CustomCampaignMenu"`
- <a id="FramehandleNames-debugButton"></a> `static constant debugButton = "DebugButton"`
- <a id="FramehandleNames-decoratedMapListBox"></a> `static constant decoratedMapListBox = "DecoratedMapListBox"`
- <a id="FramehandleNames-dialogWar3"></a> `static constant dialogWar3 = "DialogWar3"`
- <a id="FramehandleNames-escMenuBackdrop"></a> `static constant escMenuBackdrop = "EscMenuBackdrop"`
- <a id="FramehandleNames-escMenuMainPanel"></a> `static constant escMenuMainPanel = "EscMenuMainPanel"`
- <a id="FramehandleNames-escMenuMainPanelDialogTextTemplate"></a> `static constant escMenuMainPanelDialogTextTemplate = "EscMenuMainPanelDialogTextTemplate"`
- <a id="FramehandleNames-escMenuOptionsConfirmDialog"></a> `static constant escMenuOptionsConfirmDialog = "EscMenuOptionsConfirmDialog"`
- <a id="FramehandleNames-escMenuOptionsPanel"></a> `static constant escMenuOptionsPanel = "EscMenuOptionsPanel"`
- <a id="FramehandleNames-escMenuSaveDialogTextTemplate"></a> `static constant escMenuSaveDialogTextTemplate = "EscMenuSaveDialogTextTemplate"`
- <a id="FramehandleNames-escMenuSaveGamePanel"></a> `static constant escMenuSaveGamePanel = "EscMenuSaveGamePanel"`
- <a id="FramehandleNames-filterPopupMenuTemplate"></a> `static constant filterPopupMenuTemplate = "FilterPopupMenuTemplate"`
- <a id="FramehandleNames-gameChatroom"></a> `static constant gameChatroom = "GameChatroom"`
- <a id="FramehandleNames-gameResultDialog"></a> `static constant gameResultDialog = "GameResultDialog"`
- <a id="FramehandleNames-gameSaveSplashDialog"></a> `static constant gameSaveSplashDialog = "GameSaveSplashDialog"`
- <a id="FramehandleNames-iconButtonTemplate"></a> `static constant iconButtonTemplate = "IconButtonTemplate"`
- <a id="FramehandleNames-iconicButtonTemplate"></a> `static constant iconicButtonTemplate = "IconicButtonTemplate"`
- <a id="FramehandleNames-ladderButtonBackdropTemplate"></a> `static constant ladderButtonBackdropTemplate = "LadderButtonBackdropTemplate"`
- <a id="FramehandleNames-ladderButtonDisabledBackdropTemplate"></a> `static constant ladderButtonDisabledBackdropTemplate = "LadderButtonDisabledBackdropTemplate"`
- <a id="FramehandleNames-ladderButtonDisabledPushedBackdropTemplate"></a> `static constant ladderButtonDisabledPushedBackdropTemplate = "LadderButtonDisabledPushedBackdropTemplate"`
- <a id="FramehandleNames-ladderButtonFocusHighlightBackdropTemplate"></a> `static constant ladderButtonFocusHighlightBackdropTemplate = "LadderButtonFocusHighlightBackdropTemplate"`
- <a id="FramehandleNames-ladderButtonMouseOverHighlightBackdropTemplate"></a> `static constant ladderButtonMouseOverHighlightBackdropTemplate = "LadderButtonMouseOverHighlightBackdropTemplate"`
- <a id="FramehandleNames-ladderButtonPushedBackdropTemplate"></a> `static constant ladderButtonPushedBackdropTemplate = "LadderButtonPushedBackdropTemplate"`
- <a id="FramehandleNames-ladderButtonTemplate"></a> `static constant ladderButtonTemplate = "LadderButtonTemplate"`
- <a id="FramehandleNames-ladderNameTextTemplate"></a> `static constant ladderNameTextTemplate = "LadderNameTextTemplate"`
- <a id="FramehandleNames-leaderboardFrame"></a> `static constant leaderboardFrame = "Leaderboard"`
- <a id="FramehandleNames-listBoxWar3"></a> `static constant listBoxWar3 = "ListBoxWar3"`
- <a id="FramehandleNames-loading"></a> `static constant loading = "Loading"`
- <a id="FramehandleNames-loadingPlayerSlot"></a> `static constant loadingPlayerSlot = "LoadingPlayerSlot"`
- <a id="FramehandleNames-loadSavedGameScreen"></a> `static constant loadSavedGameScreen = "LoadSavedGameScreen"`
- <a id="FramehandleNames-localMultiplayerCreate"></a> `static constant localMultiplayerCreate = "LocalMultiplayerCreate"`
- <a id="FramehandleNames-localMultiplayerJoin"></a> `static constant localMultiplayerJoin = "LocalMultiplayerJoin"`
- <a id="FramehandleNames-localMultiplayerLoad"></a> `static constant localMultiplayerLoad = "LocalMultiplayerLoad"`
- <a id="FramehandleNames-logDialog"></a> `static constant logDialog = "LogDialog"`
- <a id="FramehandleNames-mainMenuFrame"></a> `static constant mainMenuFrame = "MainMenuFrame"`
- <a id="FramehandleNames-mapInfoPane"></a> `static constant mapInfoPane = "MapInfoPane"`
- <a id="FramehandleNames-mapListBox"></a> `static constant mapListBox = "MapListBox"`
- <a id="FramehandleNames-mapPreferenceBox"></a> `static constant mapPreferenceBox = "MapPreferenceBox"`
- <a id="FramehandleNames-mapPreferenceBoxBackdrop"></a> `static constant mapPreferenceBoxBackdrop = "MapPreferenceBoxBackdrop"`
- <a id="FramehandleNames-mMPlayerSlot"></a> `static constant mMPlayerSlot = "MMPlayerSlot"`
- <a id="FramehandleNames-movieScreen"></a> `static constant movieScreen = "MovieScreen"`
- <a id="FramehandleNames-multiboardFrame"></a> `static constant multiboardFrame = "Multiboard"`
- <a id="FramehandleNames-optionsConfirmDialog"></a> `static constant optionsConfirmDialog = "OptionsConfirmDialog"`
- <a id="FramehandleNames-optionsMenu"></a> `static constant optionsMenu = "OptionsMenu"`
- <a id="FramehandleNames-optionsPopupMenuBackdropTemplate"></a> `static constant optionsPopupMenuBackdropTemplate = "OptionsPopupMenuBackdropTemplate"`
- <a id="FramehandleNames-optionsPopupMenuTemplate"></a> `static constant optionsPopupMenuTemplate = "OptionsPopupMenuTemplate"`
- <a id="FramehandleNames-playerSlot"></a> `static constant playerSlot = "PlayerSlot"`
- <a id="FramehandleNames-playerSlotPopupMenu"></a> `static constant playerSlotPopupMenu = "PlayerSlotPopupMenu"`
- <a id="FramehandleNames-questButtonBackdropTemplate"></a> `static constant questButtonBackdropTemplate = "QuestButtonBackdropTemplate"`
- <a id="FramehandleNames-questButtonBaseTemplate"></a> `static constant questButtonBaseTemplate = "QuestButtonBaseTemplate"`
- <a id="FramehandleNames-questButtonDisabledBackdropTemplate"></a> `static constant questButtonDisabledBackdropTemplate = "QuestButtonDisabledBackdropTemplate"`
- <a id="FramehandleNames-questButtonDisabledPushedBackdropTemplate"></a> `static constant questButtonDisabledPushedBackdropTemplate = "QuestButtonDisabledPushedBackdropTemplate"`
- <a id="FramehandleNames-questButtonMouseOverHighlightTemplate"></a> `static constant questButtonMouseOverHighlightTemplate = "QuestButtonMouseOverHighlightTemplate"`
- <a id="FramehandleNames-questButtonPushedBackdropTemplate"></a> `static constant questButtonPushedBackdropTemplate = "QuestButtonPushedBackdropTemplate"`
- <a id="FramehandleNames-questButtonTemplate"></a> `static constant questButtonTemplate = "QuestButtonTemplate"`
- <a id="FramehandleNames-questCheckBox"></a> `static constant questCheckBox = "QuestCheckBox"`
- <a id="FramehandleNames-questCheckBox2"></a> `static constant questCheckBox2 = "QuestCheckBox2"`
- <a id="FramehandleNames-questCheckBox3"></a> `static constant questCheckBox3 = "QuestCheckBox3"`
- <a id="FramehandleNames-questConditionListScrollBar"></a> `static constant questConditionListScrollBar = "QuestConditionListScrollBar"`
- <a id="FramehandleNames-questDialog"></a> `static constant questDialog = "QuestDialog"`
- <a id="FramehandleNames-questItemListItem"></a> `static constant questItemListItem = "QuestItemListItem"`
- <a id="FramehandleNames-questItemListScrollBar"></a> `static constant questItemListScrollBar = "QuestItemListScrollBar"`
- <a id="FramehandleNames-questListItem"></a> `static constant questListItem = "QuestListItem"`
- <a id="FramehandleNames-questMainListScrollBar"></a> `static constant questMainListScrollBar = "QuestMainListScrollBar"`
- <a id="FramehandleNames-quickReplayConfirmDialog"></a> `static constant quickReplayConfirmDialog = "QuickReplayConfirmDialog"`
- <a id="FramehandleNames-quickReplayDialog"></a> `static constant quickReplayDialog = "QuickReplayDialog"`
- <a id="FramehandleNames-replayButton"></a> `static constant replayButton = "ReplayButton"`
- <a id="FramehandleNames-saveReplayPanel"></a> `static constant saveReplayPanel = "SaveReplayPanel"`
- <a id="FramehandleNames-scoreScreen4ColumnButtonTemplate"></a> `static constant scoreScreen4ColumnButtonTemplate = "ScoreScreen4ColumnButtonTemplate"`
- <a id="FramehandleNames-scoreScreen5ColumnButtonTemplate"></a> `static constant scoreScreen5ColumnButtonTemplate = "ScoreScreen5ColumnButtonTemplate"`
- <a id="FramehandleNames-scoreScreenBottomButtonTemplate"></a> `static constant scoreScreenBottomButtonTemplate = "ScoreScreenBottomButtonTemplate"`
- <a id="FramehandleNames-scoreScreenBottomCheckButtonTemplate"></a> `static constant scoreScreenBottomCheckButtonTemplate = "ScoreScreenBottomCheckButtonTemplate"`
- <a id="FramehandleNames-scoreScreenButtonBackdropTemplate"></a> `static constant scoreScreenButtonBackdropTemplate = "ScoreScreenButtonBackdropTemplate"`
- <a id="FramehandleNames-scoreScreenColumnHeaderTemplate"></a> `static constant scoreScreenColumnHeaderTemplate = "ScoreScreenColumnHeaderTemplate"`
- <a id="FramehandleNames-scoreScreenFrame"></a> `static constant scoreScreenFrame = "ScoreScreenFrame"`
- <a id="FramehandleNames-scoreScreenTabButtonTemplate"></a> `static constant scoreScreenTabButtonTemplate = "ScoreScreenTabButtonTemplate"`
- <a id="FramehandleNames-scoreScreenTabTextSelectedTemplate"></a> `static constant scoreScreenTabTextSelectedTemplate = "ScoreScreenTabTextSelectedTemplate"`
- <a id="FramehandleNames-scoreScreenTabTextTemplate"></a> `static constant scoreScreenTabTextTemplate = "ScoreScreenTabTextTemplate"`
- <a id="FramehandleNames-scriptDialog"></a> `static constant scriptDialog = "ScriptDialog"`
- <a id="FramehandleNames-scriptDialogButton"></a> `static constant scriptDialogButton = "ScriptDialogButton"`
- <a id="FramehandleNames-singlePlayerMenu"></a> `static constant singlePlayerMenu = "SinglePlayerMenu"`
- <a id="FramehandleNames-skirmish"></a> `static constant skirmish = "Skirmish"`
- <a id="FramehandleNames-skirmishPopupMenuBackdropTemplate"></a> `static constant skirmishPopupMenuBackdropTemplate = "SkirmishPopupMenuBackdropTemplate"`
- <a id="FramehandleNames-skirmishPopupMenuTemplate"></a> `static constant skirmishPopupMenuTemplate = "SkirmishPopupMenuTemplate"`
- <a id="FramehandleNames-suspendDialog"></a> `static constant suspendDialog = "SuspendDialog"`
- <a id="FramehandleNames-suspendPlayerSlot"></a> `static constant suspendPlayerSlot = "SuspendPlayerSlot"`
- <a id="FramehandleNames-teamColorMenu"></a> `static constant teamColorMenu = "TeamColorMenu"`
- <a id="FramehandleNames-teamLabelTextTemplate"></a> `static constant teamLabelTextTemplate = "TeamLabelTextTemplate"`
- <a id="FramehandleNames-teamLadderRankValueTextTemplate"></a> `static constant teamLadderRankValueTextTemplate = "TeamLadderRankValueTextTemplate"`
- <a id="FramehandleNames-teamMemberPopupMenu"></a> `static constant teamMemberPopupMenu = "TeamMemberPopupMenu"`
- <a id="FramehandleNames-teamPopupMenuBackdropTemplate"></a> `static constant teamPopupMenuBackdropTemplate = "TeamPopupMenuBackdropTemplate"`
- <a id="FramehandleNames-teamPopupMenuTemplate"></a> `static constant teamPopupMenuTemplate = "TeamPopupMenuTemplate"`
- <a id="FramehandleNames-teamSetup"></a> `static constant teamSetup = "TeamSetup"`
- <a id="FramehandleNames-teamValueTextTemplate"></a> `static constant teamValueTextTemplate = "TeamValueTextTemplate"`
- <a id="FramehandleNames-timerDialog"></a> `static constant timerDialog = "TimerDialog"`
- <a id="FramehandleNames-unresponsiveDialog"></a> `static constant unresponsiveDialog = "UnresponsiveDialog"`
- <a id="FramehandleNames-userDataMigrationDialog"></a> `static constant userDataMigrationDialog = "UserDataMigrationDialog"`
- <a id="FramehandleNames-viewReplayScreen"></a> `static constant viewReplayScreen = "ViewReplayScreen"`
