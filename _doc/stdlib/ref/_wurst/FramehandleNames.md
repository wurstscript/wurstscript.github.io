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

- <a id="framehandletypenames-buttonframe"></a> `static constant buttonframe = "BUTTON"`
  The frame type BUTTON is used for normal clickable button
- <a id="framehandletypenames-gluebutton"></a> `static constant gluebutton = "GLUEBUTTON"`
  The frame type GLUEBUTTON is used for clickable button, mouse hovering glows.
- <a id="framehandletypenames-textbutton"></a> `static constant textbutton = "TEXTBUTTON"`
  The frame type TEXTBUTTON is used for clickable TextButtons with text
- <a id="framehandletypenames-gluetextbutton"></a> `static constant gluetextbutton = "GLUETEXTBUTTON"`
  The frame type GLUETEXTBUTTON is used for clickable TextButtons, mouse hovering glows.
- <a id="framehandletypenames-text"></a> `static constant text = "TEXT"`
  The frame type TEXT is used for visible text.
- <a id="framehandletypenames-backdrop"></a> `static constant backdrop = "BACKDROP"`
  The frame type BACKDROP is used for backgrounds, borders or images.
- <a id="framehandletypenames-editbox"></a> `static constant editbox = "EDITBOX"`
  The frame type EDITBOX is used for text input by user.
- <a id="framehandletypenames-slider"></a> `static constant slider = "SLIDER"`
  The frame type SLIDER is used for user can select a value between an upper and a lower Value.
- <a id="framehandletypenames-textarea"></a> `static constant textarea = "TEXTAREA"`
  The frame type TEXTAREA is used for ui-Frames for big Texts also include scrollbars on default.
- <a id="framehandletypenames-checkbox"></a> `static constant checkbox = "CHECKBOX"`
  The frame type CHECKBOX is used for checkable checkbox
- <a id="framehandletypenames-gluecheckbox"></a> `static constant gluecheckbox = "GLUECHECKBOX"`
  The frame type GLUECHECKBOX is used for checkable checkbox, mouse hovering glows.
- <a id="framehandletypenames-popupmenu"></a> `static constant popupmenu = "POPUPMENU"`
  The frame type POPUPMENU is used for used for menus that is desinged for hovering over other frames
- <a id="framehandletypenames-menu"></a> `static constant menu = "MENU"`
  The frame type MENU is used for general menu frame designed to be displayed behind popupmenus
- <a id="framehandletypenames-scrollbar"></a> `static constant scrollbar = "SCROLLBAR"`
  The frame type SCROLLBAR is used for scrollbar that can be added to backgrops do change content (e.g. for textareas)
- <a id="framehandletypenames-control"></a> `static constant control = "CONTROL"`
  The frame type CONTROL is used for special frame that is designed for handling several control elements like buttons, checkboxes etc.
- <a id="framehandletypenames-simpleframe"></a> `static constant simpleframe = "SIMPLEFRAME"`
  The frame type SIMPLEFRAME is used for a less complex definition for frames, that does not allow different inherit types
- <a id="framehandletypenames-simplebutton"></a> `static constant simplebutton = "SIMPLEBUTTON"`
  The SimpleFrame type SIMPLEBUTTON is used for clickable SimpleFrame buttons.
- <a id="framehandletypenames-simplestatusbar"></a> `static constant simplestatusbar = "SIMPLESTATUSBAR"`
  The SimpleFrame type SIMPLESTATUSBAR is used for SimpleFrame status bars.
- <a id="framehandletypenames-simplecheckbox"></a> `static constant simplecheckbox = "SIMPLECHECKBOX"`
  The SimpleFrame type SIMPLECHECKBOX is used for SimpleFrame checkboxes.
- <a id="framehandletypenames-stringframe"></a> `static constant stringframe = "String"`
  The SimpleFrame child type String is used for text children of SimpleFrames.
  		Do not treat these children like generic frames; several BlzFrame* natives can crash on them.
- <a id="framehandletypenames-textureframe"></a> `static constant textureframe = "Texture"`
  The SimpleFrame child type Texture is used for texture children of SimpleFrames.
  		Do not treat these children like generic frames; several BlzFrame* natives can crash on them.
- <a id="framehandletypenames-dialogframe"></a> `static constant dialogframe = "DIALOG"`
  The frame type DIALOG is used for nothing special, (origin SuspendDialogs will pause the game in singleplayer)
- <a id="framehandletypenames-highlight"></a> `static constant highlight = "HIGHLIGHT"`
  The frame type HIGHLIGHT is used for frame template to define how buttons/texts are hightlingt on hovering/click/enter/focus of the mouse

### FramehandleDefaultNames

```wurst
public class FramehandleDefaultNames
```

These default frames can be obtained with getFrameByName(..) [BlzGetFrameByName]
	(the createContext (subframe-id) parameter is by default 0, some frames does contain subframes)

**Members:**

- <a id="framehandledefaultnames-allianceAcceptButton"></a> `static constant allianceAcceptButton = "AllianceAcceptButton"`
- <a id="framehandledefaultnames-allianceAcceptButtonText"></a> `static constant allianceAcceptButtonText = "AllianceAcceptButtonText"`
- <a id="framehandledefaultnames-allianceBackdrop"></a> `static constant allianceBackdrop = "AllianceBackdrop"`
- <a id="framehandledefaultnames-allianceCancelButton"></a> `static constant allianceCancelButton = "AllianceCancelButton"`
- <a id="framehandledefaultnames-allianceCancelButtonText"></a> `static constant allianceCancelButtonText = "AllianceCancelButtonText"`
- <a id="framehandledefaultnames-allianceDialog"></a> `static constant allianceDialog = "AllianceDialog"`
- <a id="framehandledefaultnames-allianceDialogScrollBar"></a> `static constant allianceDialogScrollBar = "AllianceDialogScrollBar"`
- <a id="framehandledefaultnames-allianceSlot"></a> `static constant allianceSlot = "AllianceSlot"`
  The framehandle name allianceSlot has the subframes [0 to 23]
- <a id="framehandledefaultnames-allianceTitle"></a> `static constant allianceTitle = "AllianceTitle"`
- <a id="framehandledefaultnames-alliedVictoryCheckBox"></a> `static constant alliedVictoryCheckBox = "AlliedVictoryCheckBox"`
- <a id="framehandledefaultnames-alliedVictoryLabel"></a> `static constant alliedVictoryLabel = "AlliedVictoryLabel"`
- <a id="framehandledefaultnames-allyCheckBox"></a> `static constant allyCheckBox = "AllyCheckBox"`
  The framehandle name allyCheckBox has the subframes [0 to 23]
- <a id="framehandledefaultnames-allyHeader"></a> `static constant allyHeader = "AllyHeader"`
- <a id="framehandledefaultnames-ambientCheckBox"></a> `static constant ambientCheckBox = "AmbientCheckBox"`
- <a id="framehandledefaultnames-ambientLabel"></a> `static constant ambientLabel = "AmbientLabel"`
- <a id="framehandledefaultnames-animQualityLabel"></a> `static constant animQualityLabel = "AnimQualityLabel"`
- <a id="framehandledefaultnames-animQualityValue"></a> `static constant animQualityValue = "AnimQualityValue"`
- <a id="framehandledefaultnames-bottomButtonPanel"></a> `static constant bottomButtonPanel = "BottomButtonPanel"`
- <a id="framehandledefaultnames-buttonBackdropTemplate"></a> `static constant buttonBackdropTemplate = "ButtonBackdropTemplate"`
- <a id="framehandledefaultnames-buttonDisabledBackdropTemplate"></a> `static constant buttonDisabledBackdropTemplate = "ButtonDisabledBackdropTemplate"`
- <a id="framehandledefaultnames-buttonDisabledPushedBackdropTemplate"></a> `static constant buttonDisabledPushedBackdropTemplate = "ButtonDisabledPushedBackdropTemplate"`
- <a id="framehandledefaultnames-buttonPushedBackdropTemplate"></a> `static constant buttonPushedBackdropTemplate = "ButtonPushedBackdropTemplate"`
- <a id="framehandledefaultnames-cancelButtonText"></a> `static constant cancelButtonText = "CancelButtonText"`
- <a id="framehandledefaultnames-cinematicBottomBorder"></a> `static constant cinematicBottomBorder = "CinematicBottomBorder"`
- <a id="framehandledefaultnames-cinematicDialogueText"></a> `static constant cinematicDialogueText = "CinematicDialogueText"`
- <a id="framehandledefaultnames-cinematicPanel"></a> `static constant cinematicPanel = "CinematicPanel"`
- <a id="framehandledefaultnames-cinematicPortrait"></a> `static constant cinematicPortrait = "CinematicPortrait"`
- <a id="framehandledefaultnames-cinematicPortraitBackground"></a> `static constant cinematicPortraitBackground = "CinematicPortraitBackground"`
- <a id="framehandledefaultnames-cinematicPortraitCover"></a> `static constant cinematicPortraitCover = "CinematicPortraitCover"`
- <a id="framehandledefaultnames-cinematicScenePanel"></a> `static constant cinematicScenePanel = "CinematicScenePanel"`
- <a id="framehandledefaultnames-cinematicSpeakerText"></a> `static constant cinematicSpeakerText = "CinematicSpeakerText"`
- <a id="framehandledefaultnames-cinematicTopBorder"></a> `static constant cinematicTopBorder = "CinematicTopBorder"`
- <a id="framehandledefaultnames-colorBackdrop"></a> `static constant colorBackdrop = "ColorBackdrop"`
  The framehandle name colorBackdrop has the subframes [0 to 23]
- <a id="framehandledefaultnames-colorBorder"></a> `static constant colorBorder = "ColorBorder"`
  The framehandle name colorBorder has the subframes [0 to 23]
- <a id="framehandledefaultnames-commandBarFrame"></a> `static constant commandBarFrame = "CommandBarFrame"`
  Container of the 12 command card buttons (1.32+). See commandButton(index) for the buttons.
- `static function commandButton(int index) returns string`
  Name of a command card button, index 0 to 11 (1.32+): 0 is the top-left (0,0) button, 11 the
  		bottom-right (3,2). Move/hide via these named frames, not ORIGIN_FRAME_COMMAND_BUTTON (moving
  		the origin frames glitches in 1.32+). NOTE: command buttons reappear/update on every unit
  		selection, even while hidden via BlzHideOriginFrames - re-hide on selection if needed.
- <a id="framehandledefaultnames-confirmQuitCancelButton"></a> `static constant confirmQuitCancelButton = "ConfirmQuitCancelButton"`
- <a id="framehandledefaultnames-confirmQuitCancelButtonText"></a> `static constant confirmQuitCancelButtonText = "ConfirmQuitCancelButtonText"`
- <a id="framehandledefaultnames-confirmQuitMessageText"></a> `static constant confirmQuitMessageText = "ConfirmQuitMessageText"`
- <a id="framehandledefaultnames-confirmQuitPanel"></a> `static constant confirmQuitPanel = "ConfirmQuitPanel"`
- <a id="framehandledefaultnames-confirmQuitQuitButton"></a> `static constant confirmQuitQuitButton = "ConfirmQuitQuitButton"`
- <a id="framehandledefaultnames-confirmQuitQuitButtonText"></a> `static constant confirmQuitQuitButtonText = "ConfirmQuitQuitButtonText"`
- <a id="framehandledefaultnames-confirmQuitTitleText"></a> `static constant confirmQuitTitleText = "ConfirmQuitTitleText"`
- <a id="framehandledefaultnames-consoleBottomBar"></a> `static constant consoleBottomBar = "ConsoleBottomBar"`
  Reforged 2.0+: parent of the bottom console art (CommandBarFrame, info panel parent, idle worker,
  		ORIGIN_FRAME_UBERTOOLTIP are its children). Does not exist before 2.0 (getter returns null).
  		Hiding it also hides those children - reparent the ones you want to keep to ConsoleUI first.
- <a id="framehandledefaultnames-consoleTopBar"></a> `static constant consoleTopBar = "ConsoleTopBar"`
  Reforged 2.0+: parent of the top console art (resource bar / menu button background textures).
  		Does not exist before 2.0 (getter returns null).
- <a id="framehandledefaultnames-consoleUI"></a> `static constant consoleUI = "ConsoleUI"`
- <a id="framehandledefaultnames-consoleUIBackdrop"></a> `static constant consoleUIBackdrop = "ConsoleUIBackdrop"`
  Reforged+: the black BACKDROP behind the bottom console; NOT hidden by BlzHideOriginFrames and
  		it blocks mouse clicks. Standard treatment is collapsing it (setSize(0, 0.0001)) rather than
  		hiding: it stays useful as a console-level Frame parent (e.g. to move the minimap out of 4:3).
- <a id="framehandledefaultnames-customKeysLabel"></a> `static constant customKeysLabel = "CustomKeysLabel"`
- <a id="framehandledefaultnames-customKeysValue"></a> `static constant customKeysValue = "CustomKeysValue"`
- <a id="framehandledefaultnames-decoratedMapListBox"></a> `static constant decoratedMapListBox = "DecoratedMapListBox"`
- <a id="framehandledefaultnames-deleteCancelButton"></a> `static constant deleteCancelButton = "DeleteCancelButton"`
- <a id="framehandledefaultnames-deleteCancelButtonText"></a> `static constant deleteCancelButtonText = "DeleteCancelButtonText"`
- <a id="framehandledefaultnames-deleteDeleteButton"></a> `static constant deleteDeleteButton = "DeleteDeleteButton"`
- <a id="framehandledefaultnames-deleteDeleteButtonText"></a> `static constant deleteDeleteButtonText = "DeleteDeleteButtonText"`
- <a id="framehandledefaultnames-deleteMessageText"></a> `static constant deleteMessageText = "DeleteMessageText"`
- <a id="framehandledefaultnames-deleteOnly"></a> `static constant deleteOnly = "DeleteOnly"`
- <a id="framehandledefaultnames-deleteTitleText"></a> `static constant deleteTitleText = "DeleteTitleText"`
- <a id="framehandledefaultnames-difficultyLabel"></a> `static constant difficultyLabel = "DifficultyLabel"`
- <a id="framehandledefaultnames-difficultyValue"></a> `static constant difficultyValue = "DifficultyValue"`
- <a id="framehandledefaultnames-endGameButton"></a> `static constant endGameButton = "EndGameButton"`
- <a id="framehandledefaultnames-endGameButtonText"></a> `static constant endGameButtonText = "EndGameButtonText"`
- <a id="framehandledefaultnames-endGamePanel"></a> `static constant endGamePanel = "EndGamePanel"`
- <a id="framehandledefaultnames-endGameTitleText"></a> `static constant endGameTitleText = "EndGameTitleText"`
- <a id="framehandledefaultnames-enviroCheckBox"></a> `static constant enviroCheckBox = "EnviroCheckBox"`
- <a id="framehandledefaultnames-enviroLabel"></a> `static constant enviroLabel = "EnviroLabel"`
- <a id="framehandledefaultnames-escMenuBackdrop"></a> `static constant escMenuBackdrop = "EscMenuBackdrop"`
- <a id="framehandledefaultnames-escMenuDeleteContainer"></a> `static constant escMenuDeleteContainer = "EscMenuDeleteContainer"`
- <a id="framehandledefaultnames-escMenuMainPanel"></a> `static constant escMenuMainPanel = "EscMenuMainPanel"`
- <a id="framehandledefaultnames-escMenuOptionsPanel"></a> `static constant escMenuOptionsPanel = "EscMenuOptionsPanel"`
- <a id="framehandledefaultnames-escMenuOverwriteContainer"></a> `static constant escMenuOverwriteContainer = "EscMenuOverwriteContainer"`
- <a id="framehandledefaultnames-escMenuSaveGamePanel"></a> `static constant escMenuSaveGamePanel = "EscMenuSaveGamePanel"`
- <a id="framehandledefaultnames-escMenuSaveLoadContainer"></a> `static constant escMenuSaveLoadContainer = "EscMenuSaveLoadContainer"`
- <a id="framehandledefaultnames-escOptionsLightsMenu"></a> `static constant escOptionsLightsMenu = "EscOptionsLightsMenu"`
- <a id="framehandledefaultnames-escOptionsLightsPopupMenuArrow"></a> `static constant escOptionsLightsPopupMenuArrow = "EscOptionsLightsPopupMenuArrow"`
- <a id="framehandledefaultnames-escOptionsLightsPopupMenuBackdrop"></a> `static constant escOptionsLightsPopupMenuBackdrop = "EscOptionsLightsPopupMenuBackdrop"`
- <a id="framehandledefaultnames-escOptionsLightsPopupMenuDisabledBackdrop"></a> `static constant escOptionsLightsPopupMenuDisabledBackdrop = "EscOptionsLightsPopupMenuDisabledBackdrop"`
- <a id="framehandledefaultnames-escOptionsLightsPopupMenuMenu"></a> `static constant escOptionsLightsPopupMenuMenu = "EscOptionsLightsPopupMenuMenu"`
- <a id="framehandledefaultnames-escOptionsLightsPopupMenuTitle"></a> `static constant escOptionsLightsPopupMenuTitle = "EscOptionsLightsPopupMenuTitle"`
- <a id="framehandledefaultnames-escOptionsOcclusionMenu"></a> `static constant escOptionsOcclusionMenu = "EscOptionsOcclusionMenu"`
- <a id="framehandledefaultnames-escOptionsOcclusionPopupMenuArrow"></a> `static constant escOptionsOcclusionPopupMenuArrow = "EscOptionsOcclusionPopupMenuArrow"`
- <a id="framehandledefaultnames-escOptionsOcclusionPopupMenuBackdrop"></a> `static constant escOptionsOcclusionPopupMenuBackdrop = "EscOptionsOcclusionPopupMenuBackdrop"`
- <a id="framehandledefaultnames-escOptionsOcclusionPopupMenuDisabledBackdrop"></a> `static constant escOptionsOcclusionPopupMenuDisabledBackdrop = "EscOptionsOcclusionPopupMenuDisabledBackdrop"`
- <a id="framehandledefaultnames-escOptionsOcclusionPopupMenuMenu"></a> `static constant escOptionsOcclusionPopupMenuMenu = "EscOptionsOcclusionPopupMenuMenu"`
- <a id="framehandledefaultnames-escOptionsOcclusionPopupMenuTitle"></a> `static constant escOptionsOcclusionPopupMenuTitle = "EscOptionsOcclusionPopupMenuTitle"`
- <a id="framehandledefaultnames-escOptionsParticlesMenu"></a> `static constant escOptionsParticlesMenu = "EscOptionsParticlesMenu"`
- <a id="framehandledefaultnames-escOptionsParticlesPopupMenuArrow"></a> `static constant escOptionsParticlesPopupMenuArrow = "EscOptionsParticlesPopupMenuArrow"`
- <a id="framehandledefaultnames-escOptionsParticlesPopupMenuBackdrop"></a> `static constant escOptionsParticlesPopupMenuBackdrop = "EscOptionsParticlesPopupMenuBackdrop"`
- <a id="framehandledefaultnames-escOptionsParticlesPopupMenuDisabledBackdrop"></a> `static constant escOptionsParticlesPopupMenuDisabledBackdrop = "EscOptionsParticlesPopupMenuDisabledBackdrop"`
- <a id="framehandledefaultnames-escOptionsParticlesPopupMenuMenu"></a> `static constant escOptionsParticlesPopupMenuMenu = "EscOptionsParticlesPopupMenuMenu"`
- <a id="framehandledefaultnames-escOptionsParticlesPopupMenuTitle"></a> `static constant escOptionsParticlesPopupMenuTitle = "EscOptionsParticlesPopupMenuTitle"`
- <a id="framehandledefaultnames-escOptionsResolutionMenu"></a> `static constant escOptionsResolutionMenu = "EscOptionsResolutionMenu"`
- <a id="framehandledefaultnames-escOptionsResolutionPopupMenuArrow"></a> `static constant escOptionsResolutionPopupMenuArrow = "EscOptionsResolutionPopupMenuArrow"`
- <a id="framehandledefaultnames-escOptionsResolutionPopupMenuBackdrop"></a> `static constant escOptionsResolutionPopupMenuBackdrop = "EscOptionsResolutionPopupMenuBackdrop"`
- <a id="framehandledefaultnames-escOptionsResolutionPopupMenuDisabledBackdrop"></a> `static constant escOptionsResolutionPopupMenuDisabledBackdrop = "EscOptionsResolutionPopupMenuDisabledBackdrop"`
- <a id="framehandledefaultnames-escOptionsResolutionPopupMenuMenu"></a> `static constant escOptionsResolutionPopupMenuMenu = "EscOptionsResolutionPopupMenuMenu"`
- <a id="framehandledefaultnames-escOptionsResolutionPopupMenuTitle"></a> `static constant escOptionsResolutionPopupMenuTitle = "EscOptionsResolutionPopupMenuTitle"`
- <a id="framehandledefaultnames-escOptionsShadowsMenu"></a> `static constant escOptionsShadowsMenu = "EscOptionsShadowsMenu"`
- <a id="framehandledefaultnames-escOptionsShadowsPopupMenuArrow"></a> `static constant escOptionsShadowsPopupMenuArrow = "EscOptionsShadowsPopupMenuArrow"`
- <a id="framehandledefaultnames-escOptionsShadowsPopupMenuBackdrop"></a> `static constant escOptionsShadowsPopupMenuBackdrop = "EscOptionsShadowsPopupMenuBackdrop"`
- <a id="framehandledefaultnames-escOptionsShadowsPopupMenuDisabledBackdrop"></a> `static constant escOptionsShadowsPopupMenuDisabledBackdrop = "EscOptionsShadowsPopupMenuDisabledBackdrop"`
- <a id="framehandledefaultnames-escOptionsShadowsPopupMenuMenu"></a> `static constant escOptionsShadowsPopupMenuMenu = "EscOptionsShadowsPopupMenuMenu"`
- <a id="framehandledefaultnames-escOptionsShadowsPopupMenuTitle"></a> `static constant escOptionsShadowsPopupMenuTitle = "EscOptionsShadowsPopupMenuTitle"`
- <a id="framehandledefaultnames-escOptionsWindowModeMenu"></a> `static constant escOptionsWindowModeMenu = "EscOptionsWindowModeMenu"`
- <a id="framehandledefaultnames-escOptionsWindowModePopupMenuArrow"></a> `static constant escOptionsWindowModePopupMenuArrow = "EscOptionsWindowModePopupMenuArrow"`
- <a id="framehandledefaultnames-escOptionsWindowModePopupMenuBackdrop"></a> `static constant escOptionsWindowModePopupMenuBackdrop = "EscOptionsWindowModePopupMenuBackdrop"`
- <a id="framehandledefaultnames-escOptionsWindowModePopupMenuDisabledBackdrop"></a> `static constant escOptionsWindowModePopupMenuDisabledBackdrop = "EscOptionsWindowModePopupMenuDisabledBackdrop"`
- <a id="framehandledefaultnames-escOptionsWindowModePopupMenuMenu"></a> `static constant escOptionsWindowModePopupMenuMenu = "EscOptionsWindowModePopupMenuMenu"`
- <a id="framehandledefaultnames-escOptionsWindowModePopupMenuTitle"></a> `static constant escOptionsWindowModePopupMenuTitle = "EscOptionsWindowModePopupMenuTitle"`
- <a id="framehandledefaultnames-exitButton"></a> `static constant exitButton = "ExitButton"`
- <a id="framehandledefaultnames-exitButtonText"></a> `static constant exitButtonText = "ExitButtonText"`
- <a id="framehandledefaultnames-extraHighLatencyLabel"></a> `static constant extraHighLatencyLabel = "ExtraHighLatencyLabel"`
- <a id="framehandledefaultnames-extraHighLatencyRadio"></a> `static constant extraHighLatencyRadio = "ExtraHighLatencyRadio"`
- <a id="framehandledefaultnames-fileListFrame"></a> `static constant fileListFrame = "FileListFrame"`
- <a id="framehandledefaultnames-formationButton"></a> `static constant formationButton = "FormationButton"`
  The bottom minimap button (formation toggle), 1.32+. One of the five minimap buttons; see
  		miniMapButtonBar for the container and the inconsistent in-game casing of the others.
- <a id="framehandledefaultnames-formationToggleCheckBox"></a> `static constant formationToggleCheckBox = "FormationToggleCheckBox"`
- <a id="framehandledefaultnames-formationToggleLabel"></a> `static constant formationToggleLabel = "FormationToggleLabel"`
- <a id="framehandledefaultnames-gameplayButton"></a> `static constant gameplayButton = "GameplayButton"`
- <a id="framehandledefaultnames-gameplayButtonText"></a> `static constant gameplayButtonText = "GameplayButtonText"`
- <a id="framehandledefaultnames-gameplayPanel"></a> `static constant gameplayPanel = "GameplayPanel"`
- <a id="framehandledefaultnames-gameplayTitleText"></a> `static constant gameplayTitleText = "GameplayTitleText"`
- <a id="framehandledefaultnames-gameSpeedLabel"></a> `static constant gameSpeedLabel = "GameSpeedLabel"`
- <a id="framehandledefaultnames-gameSpeedSlider"></a> `static constant gameSpeedSlider = "GameSpeedSlider"`
- <a id="framehandledefaultnames-gameSpeedValue"></a> `static constant gameSpeedValue = "GameSpeedValue"`
- <a id="framehandledefaultnames-gammaBrightLabel"></a> `static constant gammaBrightLabel = "GammaBrightLabel"`
- <a id="framehandledefaultnames-gammaDarkLabel"></a> `static constant gammaDarkLabel = "GammaDarkLabel"`
- <a id="framehandledefaultnames-gammaLabel"></a> `static constant gammaLabel = "GammaLabel"`
- <a id="framehandledefaultnames-gammaSlider"></a> `static constant gammaSlider = "GammaSlider"`
- <a id="framehandledefaultnames-goldBackdrop"></a> `static constant goldBackdrop = "GoldBackdrop"`
  The framehandle name goldBackdrop has the subframes [0 to 23]
- <a id="framehandledefaultnames-goldHeader"></a> `static constant goldHeader = "GoldHeader"`
- <a id="framehandledefaultnames-goldText"></a> `static constant goldText = "GoldText"`
  The framehandle name goldText has the subframes [0 to 23]
- <a id="framehandledefaultnames-healthBarsCheckBox"></a> `static constant healthBarsCheckBox = "HealthBarsCheckBox"`
- <a id="framehandledefaultnames-healthBarsLabel"></a> `static constant healthBarsLabel = "HealthBarsLabel"`
- <a id="framehandledefaultnames-helpButton"></a> `static constant helpButton = "HelpButton"`
- <a id="framehandledefaultnames-helpButtonText"></a> `static constant helpButtonText = "HelpButtonText"`
- <a id="framehandledefaultnames-helpOKButton"></a> `static constant helpOKButton = "HelpOKButton"`
- <a id="framehandledefaultnames-helpOKButtonText"></a> `static constant helpOKButtonText = "HelpOKButtonText"`
- <a id="framehandledefaultnames-helpPanel"></a> `static constant helpPanel = "HelpPanel"`
- <a id="framehandledefaultnames-helpTextArea"></a> `static constant helpTextArea = "HelpTextArea"`
- <a id="framehandledefaultnames-helpTitleText"></a> `static constant helpTitleText = "HelpTitleText"`
- <a id="framehandledefaultnames-highLatencyLabel"></a> `static constant highLatencyLabel = "HighLatencyLabel"`
- <a id="framehandledefaultnames-highLatencyRadio"></a> `static constant highLatencyRadio = "HighLatencyRadio"`
- <a id="framehandledefaultnames-infoPanelIconAllyFoodIcon"></a> `static constant infoPanelIconAllyFoodIcon = "InfoPanelIconAllyFoodIcon"`
  The framehandle name infoPanelIconAllyFoodIcon has the subframe [7]
- <a id="framehandledefaultnames-infoPanelIconAllyFoodValue"></a> `static constant infoPanelIconAllyFoodValue = "InfoPanelIconAllyFoodValue"`
  The framehandle name infoPanelIconAllyFoodValue has the subframe [7]
- <a id="framehandledefaultnames-infoPanelIconAllyGoldIcon"></a> `static constant infoPanelIconAllyGoldIcon = "InfoPanelIconAllyGoldIcon"`
  The framehandle name infoPanelIconAllyGoldIcon has the subframe [7]
- <a id="framehandledefaultnames-infoPanelIconAllyGoldValue"></a> `static constant infoPanelIconAllyGoldValue = "InfoPanelIconAllyGoldValue"`
  The framehandle name infoPanelIconAllyGoldValue has the subframe [7]
- <a id="framehandledefaultnames-infoPanelIconAllyTitle"></a> `static constant infoPanelIconAllyTitle = "InfoPanelIconAllyTitle"`
  The framehandle name infoPanelIconAllyTitle has the subframe [7]
- <a id="framehandledefaultnames-infoPanelIconAllyUpkeep"></a> `static constant infoPanelIconAllyUpkeep = "InfoPanelIconAllyUpkeep"`
  The framehandle name infoPanelIconAllyUpkeep has the subframe [7]
- <a id="framehandledefaultnames-infoPanelIconAllyWoodIcon"></a> `static constant infoPanelIconAllyWoodIcon = "InfoPanelIconAllyWoodIcon"`
  The framehandle name infoPanelIconAllyWoodIcon has the subframe [7]
- <a id="framehandledefaultnames-infoPanelIconAllyWoodValue"></a> `static constant infoPanelIconAllyWoodValue = "InfoPanelIconAllyWoodValue"`
  The framehandle name infoPanelIconAllyWoodValue has the subframe [7]
- <a id="framehandledefaultnames-infoPanelIconBackdrop"></a> `static constant infoPanelIconBackdrop = "InfoPanelIconBackdrop"`
  The framehandle name infoPanelIconBackdrop has the subframes [0 to 5]
- <a id="framehandledefaultnames-infoPanelIconHeroAgilityLabel"></a> `static constant infoPanelIconHeroAgilityLabel = "InfoPanelIconHeroAgilityLabel"`
  The framehandle name infoPanelIconHeroAgilityLabel has the subframe [6]
- <a id="framehandledefaultnames-infoPanelIconHeroAgilityValue"></a> `static constant infoPanelIconHeroAgilityValue = "InfoPanelIconHeroAgilityValue"`
  The framehandle name infoPanelIconHeroAgilityValue has the subframe [6]
- <a id="framehandledefaultnames-infoPanelIconHeroIcon"></a> `static constant infoPanelIconHeroIcon = "InfoPanelIconHeroIcon"`
  The framehandle name infoPanelIconHeroIcon has the subframe [6]
- <a id="framehandledefaultnames-infoPanelIconHeroIntellectLabel"></a> `static constant infoPanelIconHeroIntellectLabel = "InfoPanelIconHeroIntellectLabel"`
  The framehandle name infoPanelIconHeroIntellectLabel has the subframe [6]
- <a id="framehandledefaultnames-infoPanelIconHeroIntellectValue"></a> `static constant infoPanelIconHeroIntellectValue = "InfoPanelIconHeroIntellectValue"`
  The framehandle name infoPanelIconHeroIntellectValue has the subframe [6]
- <a id="framehandledefaultnames-infoPanelIconHeroStrengthLabel"></a> `static constant infoPanelIconHeroStrengthLabel = "InfoPanelIconHeroStrengthLabel"`
  The framehandle name infoPanelIconHeroStrengthLabel has the subframe [6]
- <a id="framehandledefaultnames-infoPanelIconHeroStrengthValue"></a> `static constant infoPanelIconHeroStrengthValue = "InfoPanelIconHeroStrengthValue"`
  The framehandle name infoPanelIconHeroStrengthValue has the subframe [6]
- <a id="framehandledefaultnames-infoPanelIconLabel"></a> `static constant infoPanelIconLabel = "InfoPanelIconLabel"`
  The framehandle name infoPanelIconLabel has the subframes [0 to 5]
- <a id="framehandledefaultnames-infoPanelIconLevel"></a> `static constant infoPanelIconLevel = "InfoPanelIconLevel"`
  The framehandle name infoPanelIconLevel has the subframes [0 to 5]
- <a id="framehandledefaultnames-infoPanelIconValue"></a> `static constant infoPanelIconValue = "InfoPanelIconValue"`
  The framehandle name infoPanelIconValue has the subframes [0 to 5]
- <a id="framehandledefaultnames-insideConfirmQuitPanel"></a> `static constant insideConfirmQuitPanel = "InsideConfirmQuitPanel"`
- <a id="framehandledefaultnames-insideEndGamePanel"></a> `static constant insideEndGamePanel = "InsideEndGamePanel"`
- <a id="framehandledefaultnames-insideHelpPanel"></a> `static constant insideHelpPanel = "InsideHelpPanel"`
- <a id="framehandledefaultnames-insideMainPanel"></a> `static constant insideMainPanel = "InsideMainPanel"`
- <a id="framehandledefaultnames-insideTipsPanel"></a> `static constant insideTipsPanel = "InsideTipsPanel"`
- `static function inventoryButton(int index) returns string`
  Name of an inventory item button, index 0 to 5 (1.32+). Move/hide via these named frames, not
  		ORIGIN_FRAME_ITEM_BUTTON (moving the origin frames glitches in 1.32+). NOTE: like command
  		buttons, they reappear/update on every unit selection.
- <a id="framehandledefaultnames-inventoryCoverTexture"></a> `static constant inventoryCoverTexture = "InventoryCoverTexture"`
  Reforged 2.0+ texture covering the inventory area when no unit with inventory is selected.
  		Pre-2.0 this is simpleInventoryCover. Standard treatment: setAlpha(0).
- <a id="framehandledefaultnames-keyScrollFastLabel"></a> `static constant keyScrollFastLabel = "KeyScrollFastLabel"`
- <a id="framehandledefaultnames-keyScrollLabel"></a> `static constant keyScrollLabel = "KeyScrollLabel"`
- <a id="framehandledefaultnames-keyScrollSlider"></a> `static constant keyScrollSlider = "KeyScrollSlider"`
- <a id="framehandledefaultnames-keyScrollSlowLabel"></a> `static constant keyScrollSlowLabel = "KeyScrollSlowLabel"`
- <a id="framehandledefaultnames-latencyInfo1"></a> `static constant latencyInfo1 = "LatencyInfo1"`
- <a id="framehandledefaultnames-latencyInfo2"></a> `static constant latencyInfo2 = "LatencyInfo2"`
- <a id="framehandledefaultnames-leaderboardFrame"></a> `static constant leaderboardFrame = "Leaderboard"`
- <a id="framehandledefaultnames-leaderboardBackdrop"></a> `static constant leaderboardBackdrop = "LeaderboardBackdrop"`
- <a id="framehandledefaultnames-leaderboardListContainer"></a> `static constant leaderboardListContainer = "LeaderboardListContainer"`
- <a id="framehandledefaultnames-leaderboardTitle"></a> `static constant leaderboardTitle = "LeaderboardTitle"`
- <a id="framehandledefaultnames-lightsLabel"></a> `static constant lightsLabel = "LightsLabel"`
- <a id="framehandledefaultnames-loadGameButton"></a> `static constant loadGameButton = "LoadGameButton"`
- <a id="framehandledefaultnames-loadGameButtonText"></a> `static constant loadGameButtonText = "LoadGameButtonText"`
- <a id="framehandledefaultnames-loadGameCancelButton"></a> `static constant loadGameCancelButton = "LoadGameCancelButton"`
- <a id="framehandledefaultnames-loadGameCancelButtonText"></a> `static constant loadGameCancelButtonText = "LoadGameCancelButtonText"`
- <a id="framehandledefaultnames-loadGameLoadButton"></a> `static constant loadGameLoadButton = "LoadGameLoadButton"`
- <a id="framehandledefaultnames-loadGameLoadButtonText"></a> `static constant loadGameLoadButtonText = "LoadGameLoadButtonText"`
- <a id="framehandledefaultnames-loadGameTitleText"></a> `static constant loadGameTitleText = "LoadGameTitleText"`
- <a id="framehandledefaultnames-loadOnly"></a> `static constant loadOnly = "LoadOnly"`
- <a id="framehandledefaultnames-logArea"></a> `static constant logArea = "LogArea"`
- <a id="framehandledefaultnames-logAreaBackdrop"></a> `static constant logAreaBackdrop = "LogAreaBackdrop"`
- <a id="framehandledefaultnames-logAreaScrollBar"></a> `static constant logAreaScrollBar = "LogAreaScrollBar"`
- <a id="framehandledefaultnames-logBackdrop"></a> `static constant logBackdrop = "LogBackdrop"`
- <a id="framehandledefaultnames-logDialog"></a> `static constant logDialog = "LogDialog"`
- <a id="framehandledefaultnames-logOkButton"></a> `static constant logOkButton = "LogOkButton"`
- <a id="framehandledefaultnames-logOkButtonText"></a> `static constant logOkButtonText = "LogOkButtonText"`
- <a id="framehandledefaultnames-logTitle"></a> `static constant logTitle = "LogTitle"`
- <a id="framehandledefaultnames-lowLatencyLabel"></a> `static constant lowLatencyLabel = "LowLatencyLabel"`
- <a id="framehandledefaultnames-lowLatencyRadio"></a> `static constant lowLatencyRadio = "LowLatencyRadio"`
- <a id="framehandledefaultnames-lumberBackdrop"></a> `static constant lumberBackdrop = "LumberBackdrop"`
  The framehandle name lumberBackdrop has the subframes [0 to 23]
- <a id="framehandledefaultnames-lumberHeader"></a> `static constant lumberHeader = "LumberHeader"`
- <a id="framehandledefaultnames-lumberText"></a> `static constant lumberText = "LumberText"`
  The framehandle name lumberText has the subframes [0 to 23]
- <a id="framehandledefaultnames-mainPanel"></a> `static constant mainPanel = "MainPanel"`
- <a id="framehandledefaultnames-mapListBoxBackdrop"></a> `static constant mapListBoxBackdrop = "MapListBoxBackdrop"`
- <a id="framehandledefaultnames-mapListScrollBar"></a> `static constant mapListScrollBar = "MapListScrollBar"`
- <a id="framehandledefaultnames-miniMapAllyButton"></a> `static constant miniMapAllyButton = "MiniMapAllyButton"`
  Minimap ally-filter button (1.32+). Casing of the five minimap buttons is inconsistent in-game;
  		these constants reproduce it exactly. Individual buttons can only be shown while their container
  		miniMapButtonBar is visible.
- <a id="framehandledefaultnames-miniMapButtonBar"></a> `static constant miniMapButtonBar = "MiniMapButtonBar"`
  Container of the five minimap buttons (ConsoleUI child [4], 1.32.6+ via name). Buttons top to
  		bottom: minimapSignalButton, miniMapTerrainButton, miniMapAllyButton, miniMapCreepButton,
  		formationButton (= ORIGIN_FRAME_MINIMAP_BUTTON 0 to 4).
- <a id="framehandledefaultnames-miniMapCreepButton"></a> `static constant miniMapCreepButton = "MiniMapCreepButton"`
  Minimap creep-camp filter button (1.32+).
- <a id="framehandledefaultnames-miniMapFrame"></a> `static constant miniMapFrame = "MiniMapFrame"`
  The minimap (1.32+); equal to ORIGIN_FRAME_MINIMAP. Quirk: repositioning it a SECOND time in
  		1.31.1 desyncs minimap clicks from the visual (clicks act relative to the first position).
- <a id="framehandledefaultnames-minimapSignalButton"></a> `static constant minimapSignalButton = "MinimapSignalButton"`
  Minimap ping/signal button (1.32+). Note the lowercase 'm' in "Minimap": in-game casing.
- <a id="framehandledefaultnames-miniMapTerrainButton"></a> `static constant miniMapTerrainButton = "MiniMapTerrainButton"`
  Minimap terrain-toggle button (1.32+).
- <a id="framehandledefaultnames-modelDetailLabel"></a> `static constant modelDetailLabel = "ModelDetailLabel"`
- <a id="framehandledefaultnames-modelDetailValue"></a> `static constant modelDetailValue = "ModelDetailValue"`
- <a id="framehandledefaultnames-mouseScrollDisable"></a> `static constant mouseScrollDisable = "MouseScrollDisable"`
- <a id="framehandledefaultnames-mouseScrollDisableLabel"></a> `static constant mouseScrollDisableLabel = "MouseScrollDisableLabel"`
- <a id="framehandledefaultnames-mouseScrollFastLabel"></a> `static constant mouseScrollFastLabel = "MouseScrollFastLabel"`
- <a id="framehandledefaultnames-mouseScrollLabel"></a> `static constant mouseScrollLabel = "MouseScrollLabel"`
- <a id="framehandledefaultnames-mouseScrollSlider"></a> `static constant mouseScrollSlider = "MouseScrollSlider"`
- <a id="framehandledefaultnames-mouseScrollSlowLabel"></a> `static constant mouseScrollSlowLabel = "MouseScrollSlowLabel"`
- <a id="framehandledefaultnames-movementCheckBox"></a> `static constant movementCheckBox = "MovementCheckBox"`
- <a id="framehandledefaultnames-movementLabel"></a> `static constant movementLabel = "MovementLabel"`
- <a id="framehandledefaultnames-multiboardFrame"></a> `static constant multiboardFrame = "Multiboard"`
- <a id="framehandledefaultnames-multiboardBackdrop"></a> `static constant multiboardBackdrop = "MultiboardBackdrop"`
- <a id="framehandledefaultnames-multiboardListContainer"></a> `static constant multiboardListContainer = "MultiboardListContainer"`
- <a id="framehandledefaultnames-multiboardMinimizeButton"></a> `static constant multiboardMinimizeButton = "MultiboardMinimizeButton"`
- <a id="framehandledefaultnames-multiboardTitle"></a> `static constant multiboardTitle = "MultiboardTitle"`
- <a id="framehandledefaultnames-multiboardTitleBackdrop"></a> `static constant multiboardTitleBackdrop = "MultiboardTitleBackdrop"`
- <a id="framehandledefaultnames-musicCheckBox"></a> `static constant musicCheckBox = "MusicCheckBox"`
- <a id="framehandledefaultnames-musicVolumeHighLabel"></a> `static constant musicVolumeHighLabel = "MusicVolumeHighLabel"`
- <a id="framehandledefaultnames-musicVolumeLabel"></a> `static constant musicVolumeLabel = "MusicVolumeLabel"`
- <a id="framehandledefaultnames-musicVolumeLowLabel"></a> `static constant musicVolumeLowLabel = "MusicVolumeLowLabel"`
- <a id="framehandledefaultnames-musicVolumeSlider"></a> `static constant musicVolumeSlider = "MusicVolumeSlider"`
- <a id="framehandledefaultnames-networkButton"></a> `static constant networkButton = "NetworkButton"`
- <a id="framehandledefaultnames-networkButtonText"></a> `static constant networkButtonText = "NetworkButtonText"`
- <a id="framehandledefaultnames-networkLabel"></a> `static constant networkLabel = "NetworkLabel"`
- <a id="framehandledefaultnames-networkPanel"></a> `static constant networkPanel = "NetworkPanel"`
- <a id="framehandledefaultnames-networkTitleText"></a> `static constant networkTitleText = "NetworkTitleText"`
- <a id="framehandledefaultnames-observerCameraCheckBox"></a> `static constant observerCameraCheckBox = "ObserverCameraCheckBox"`
- <a id="framehandledefaultnames-observerCameraString"></a> `static constant observerCameraString = "ObserverCameraString"`
- <a id="framehandledefaultnames-observerFogCheckBox"></a> `static constant observerFogCheckBox = "ObserverFogCheckBox"`
- <a id="framehandledefaultnames-observerFogString"></a> `static constant observerFogString = "ObserverFogString"`
- <a id="framehandledefaultnames-observerVisionMenu"></a> `static constant observerVisionMenu = "ObserverVisionMenu"`
- <a id="framehandledefaultnames-observerVisionMenuArrow"></a> `static constant observerVisionMenuArrow = "ObserverVisionMenuArrow"`
- <a id="framehandledefaultnames-observerVisionMenuBackdrop"></a> `static constant observerVisionMenuBackdrop = "ObserverVisionMenuBackdrop"`
- <a id="framehandledefaultnames-observerVisionMenuDisabledBackdrop"></a> `static constant observerVisionMenuDisabledBackdrop = "ObserverVisionMenuDisabledBackdrop"`
- <a id="framehandledefaultnames-observerVisionMenuTitle"></a> `static constant observerVisionMenuTitle = "ObserverVisionMenuTitle"`
- <a id="framehandledefaultnames-observerVisionPopupMenu"></a> `static constant observerVisionPopupMenu = "ObserverVisionPopupMenu"`
- <a id="framehandledefaultnames-observerVisionPopupMenuMenuBackdropTemplate"></a> `static constant observerVisionPopupMenuMenuBackdropTemplate = "ObserverVisionPopupMenuMenuBackdropTemplate"`
- <a id="framehandledefaultnames-occlusionLabel"></a> `static constant occlusionLabel = "OcclusionLabel"`
- <a id="framehandledefaultnames-oKButtonText"></a> `static constant oKButtonText = "OKButtonText"`
- <a id="framehandledefaultnames-optionsButton"></a> `static constant optionsButton = "OptionsButton"`
- <a id="framehandledefaultnames-optionsButtonText"></a> `static constant optionsButtonText = "OptionsButtonText"`
- <a id="framehandledefaultnames-optionsCancelButton"></a> `static constant optionsCancelButton = "OptionsCancelButton"`
- <a id="framehandledefaultnames-optionsOKButton"></a> `static constant optionsOKButton = "OptionsOKButton"`
- <a id="framehandledefaultnames-optionsPanel"></a> `static constant optionsPanel = "OptionsPanel"`
- <a id="framehandledefaultnames-optionsPreviousButton"></a> `static constant optionsPreviousButton = "OptionsPreviousButton"`
- <a id="framehandledefaultnames-optionsPreviousButtonText"></a> `static constant optionsPreviousButtonText = "OptionsPreviousButtonText"`
- <a id="framehandledefaultnames-optionsTitleText"></a> `static constant optionsTitleText = "OptionsTitleText"`
- <a id="framehandledefaultnames-overwriteCancelButton"></a> `static constant overwriteCancelButton = "OverwriteCancelButton"`
- <a id="framehandledefaultnames-overwriteCancelButtonText"></a> `static constant overwriteCancelButtonText = "OverwriteCancelButtonText"`
- <a id="framehandledefaultnames-overwriteMessageText"></a> `static constant overwriteMessageText = "OverwriteMessageText"`
- <a id="framehandledefaultnames-overwriteOnly"></a> `static constant overwriteOnly = "OverwriteOnly"`
- <a id="framehandledefaultnames-overwriteOverwriteButton"></a> `static constant overwriteOverwriteButton = "OverwriteOverwriteButton"`
- <a id="framehandledefaultnames-overwriteOverwriteButtonText"></a> `static constant overwriteOverwriteButtonText = "OverwriteOverwriteButtonText"`
- <a id="framehandledefaultnames-overwriteTitleText"></a> `static constant overwriteTitleText = "OverwriteTitleText"`
- <a id="framehandledefaultnames-particlesLabel"></a> `static constant particlesLabel = "ParticlesLabel"`
- <a id="framehandledefaultnames-pauseButton"></a> `static constant pauseButton = "PauseButton"`
- <a id="framehandledefaultnames-pauseButtonText"></a> `static constant pauseButtonText = "PauseButtonText"`
- <a id="framehandledefaultnames-playerNameLabel"></a> `static constant playerNameLabel = "PlayerNameLabel"`
  The framehandle name playerNameLabel has the subframes [0 to 23]
- <a id="framehandledefaultnames-playersHeader"></a> `static constant playersHeader = "PlayersHeader"`
- <a id="framehandledefaultnames-positionalCheckBox"></a> `static constant positionalCheckBox = "PositionalCheckBox"`
- <a id="framehandledefaultnames-positionalLabel"></a> `static constant positionalLabel = "PositionalLabel"`
- <a id="framehandledefaultnames-previousButton"></a> `static constant previousButton = "PreviousButton"`
- <a id="framehandledefaultnames-previousButtonText"></a> `static constant previousButtonText = "PreviousButtonText"`
- <a id="framehandledefaultnames-providerLabel"></a> `static constant providerLabel = "ProviderLabel"`
- <a id="framehandledefaultnames-providerValue"></a> `static constant providerValue = "ProviderValue"`
- <a id="framehandledefaultnames-quitButton"></a> `static constant quitButton = "QuitButton"`
- <a id="framehandledefaultnames-quitButtonText"></a> `static constant quitButtonText = "QuitButtonText"`
- <a id="framehandledefaultnames-resolutionLabel"></a> `static constant resolutionLabel = "ResolutionLabel"`
- <a id="framehandledefaultnames-resourceBarFrame"></a> `static constant resourceBarFrame = "ResourceBarFrame"`
- <a id="framehandledefaultnames-resourceBarGoldText"></a> `static constant resourceBarGoldText = "ResourceBarGoldText"`
- <a id="framehandledefaultnames-resourceBarLumberText"></a> `static constant resourceBarLumberText = "ResourceBarLumberText"`
- <a id="framehandledefaultnames-resourceBarSupplyText"></a> `static constant resourceBarSupplyText = "ResourceBarSupplyText"`
- <a id="framehandledefaultnames-resourceBarUpkeepText"></a> `static constant resourceBarUpkeepText = "ResourceBarUpkeepText"`
- <a id="framehandledefaultnames-resourceTradingTitle"></a> `static constant resourceTradingTitle = "ResourceTradingTitle"`
- <a id="framehandledefaultnames-restartButton"></a> `static constant restartButton = "RestartButton"`
- <a id="framehandledefaultnames-restartButtonText"></a> `static constant restartButtonText = "RestartButtonText"`
- <a id="framehandledefaultnames-returnButton"></a> `static constant returnButton = "ReturnButton"`
- <a id="framehandledefaultnames-returnButtonText"></a> `static constant returnButtonText = "ReturnButtonText"`
- <a id="framehandledefaultnames-saveAndLoad"></a> `static constant saveAndLoad = "SaveAndLoad"`
- <a id="framehandledefaultnames-saveGameButton"></a> `static constant saveGameButton = "SaveGameButton"`
- <a id="framehandledefaultnames-saveGameButtonText"></a> `static constant saveGameButtonText = "SaveGameButtonText"`
- <a id="framehandledefaultnames-saveGameCancelButton"></a> `static constant saveGameCancelButton = "SaveGameCancelButton"`
- <a id="framehandledefaultnames-saveGameCancelButtonText"></a> `static constant saveGameCancelButtonText = "SaveGameCancelButtonText"`
- <a id="framehandledefaultnames-saveGameDeleteButton"></a> `static constant saveGameDeleteButton = "SaveGameDeleteButton"`
- <a id="framehandledefaultnames-saveGameDeleteButtonText"></a> `static constant saveGameDeleteButtonText = "SaveGameDeleteButtonText"`
- <a id="framehandledefaultnames-saveGameFileEditBox"></a> `static constant saveGameFileEditBox = "SaveGameFileEditBox"`
- <a id="framehandledefaultnames-saveGameFileEditBoxText"></a> `static constant saveGameFileEditBoxText = "SaveGameFileEditBoxText"`
- <a id="framehandledefaultnames-saveGameSaveButton"></a> `static constant saveGameSaveButton = "SaveGameSaveButton"`
- <a id="framehandledefaultnames-saveGameSaveButtonText"></a> `static constant saveGameSaveButtonText = "SaveGameSaveButtonText"`
- <a id="framehandledefaultnames-saveGameTitleText"></a> `static constant saveGameTitleText = "SaveGameTitleText"`
- <a id="framehandledefaultnames-saveOnly"></a> `static constant saveOnly = "SaveOnly"`
- <a id="framehandledefaultnames-shadowsLabel"></a> `static constant shadowsLabel = "ShadowsLabel"`
- <a id="framehandledefaultnames-simpleBuildingActionLabel"></a> `static constant simpleBuildingActionLabel = "SimpleBuildingActionLabel"`
  The framehandle name simpleBuildingActionLabel has the subframes [0, 1]
- <a id="framehandledefaultnames-simpleBuildingDescriptionValue"></a> `static constant simpleBuildingDescriptionValue = "SimpleBuildingDescriptionValue"`
  The framehandle name simpleBuildingDescriptionValue has the subframe [1]
- <a id="framehandledefaultnames-simpleBuildingNameValue"></a> `static constant simpleBuildingNameValue = "SimpleBuildingNameValue"`
  The framehandle name simpleBuildingNameValue has the subframe [1]
- <a id="framehandledefaultnames-simpleBuildQueueBackdrop"></a> `static constant simpleBuildQueueBackdrop = "SimpleBuildQueueBackdrop"`
  The framehandle name simpleBuildQueueBackdrop has the subframe [1]
- <a id="framehandledefaultnames-simpleBuildTimeIndicator"></a> `static constant simpleBuildTimeIndicator = "SimpleBuildTimeIndicator"`
  The framehandle name simpleBuildTimeIndicator has the subframes [0, 1]
- <a id="framehandledefaultnames-simpleClassValue"></a> `static constant simpleClassValue = "SimpleClassValue"`
- <a id="framehandledefaultnames-simpleDestructableNameValue"></a> `static constant simpleDestructableNameValue = "SimpleDestructableNameValue"`
- <a id="framehandledefaultnames-simpleHeroLevelBar"></a> `static constant simpleHeroLevelBar = "SimpleHeroLevelBar"`
  The framehandle name simpleHeroLevelBar has the subframe [4]
- <a id="framehandledefaultnames-simpleHoldDescriptionValue"></a> `static constant simpleHoldDescriptionValue = "SimpleHoldDescriptionValue"`
  The framehandle name simpleHoldDescriptionValue has the subframe [2]
- <a id="framehandledefaultnames-simpleHoldNameValue"></a> `static constant simpleHoldNameValue = "SimpleHoldNameValue"`
  The framehandle name simpleHoldNameValue has the subframe [2]
- <a id="framehandledefaultnames-simpleInfoPanelBuildingDetail"></a> `static constant simpleInfoPanelBuildingDetail = "SimpleInfoPanelBuildingDetail"`
  The framehandle name simpleInfoPanelBuildingDetail has the subframe [1]
- <a id="framehandledefaultnames-simpleInfoPanelCargoDetail"></a> `static constant simpleInfoPanelCargoDetail = "SimpleInfoPanelCargoDetail"`
  The framehandle name simpleInfoPanelCargoDetail has the subframe [2]
- <a id="framehandledefaultnames-simpleInfoPanelDestructableDetail"></a> `static constant simpleInfoPanelDestructableDetail = "SimpleInfoPanelDestructableDetail"`
  The framehandle name simpleInfoPanelDestructableDetail has the subframe [4]
- <a id="framehandledefaultnames-simpleInfoPanelIconAlly"></a> `static constant simpleInfoPanelIconAlly = "SimpleInfoPanelIconAlly"`
  The framehandle name simpleInfoPanelIconArmor has the subframe [7]
- <a id="framehandledefaultnames-simpleInfoPanelIconArmor"></a> `static constant simpleInfoPanelIconArmor = "SimpleInfoPanelIconArmor"`
  The framehandle name simpleInfoPanelIconArmor has the subframe [2]
- <a id="framehandledefaultnames-simpleInfoPanelIconDamage"></a> `static constant simpleInfoPanelIconDamage = "SimpleInfoPanelIconDamage"`
  The framehandle name SimpleInfoPanelIconDamage has the subframe [0, 1]
- <a id="framehandledefaultnames-simpleInfoPanelIconFood"></a> `static constant simpleInfoPanelIconFood = "SimpleInfoPanelIconFood"`
  The framehandle name simpleInfoPanelIconFood has the subframe [4]
- <a id="framehandledefaultnames-simpleInfoPanelIconGold"></a> `static constant simpleInfoPanelIconGold = "SimpleInfoPanelIconGold"`
  The framehandle name simpleInfoPanelIconGold has the subframe [5]
- <a id="framehandledefaultnames-simpleInfoPanelIconHero"></a> `static constant simpleInfoPanelIconHero = "SimpleInfoPanelIconHero"`
  The framehandle name simpleInfoPanelIconHero has the subframe [6]
- <a id="framehandledefaultnames-simpleInfoPanelIconHeroText"></a> `static constant simpleInfoPanelIconHeroText = "SimpleInfoPanelIconHeroText"`
  The framehandle name simpleInfoPanelIconHeroText has the subframe [6]
- <a id="framehandledefaultnames-simpleInfoPanelIconRank"></a> `static constant simpleInfoPanelIconRank = "SimpleInfoPanelIconRank"`
  The framehandle name simpleInfoPanelIconRank has the subframe [3]
- <a id="framehandledefaultnames-simpleInfoPanelItemDetail"></a> `static constant simpleInfoPanelItemDetail = "SimpleInfoPanelItemDetail"`
  The framehandle name simpleInfoPanelItemDetail has the subframe [3]
- <a id="framehandledefaultnames-simpleInfoPanelUnitDetail"></a> `static constant simpleInfoPanelUnitDetail = "SimpleInfoPanelUnitDetail"`
- <a id="framehandledefaultnames-simpleInventoryCover"></a> `static constant simpleInventoryCover = "SimpleInventoryCover"`
  Pre-2.0 texture covering the inventory area when no unit with inventory is selected; Reforged
  		2.0+ uses inventoryCoverTexture instead. Standard treatment: setAlpha(0).
- <a id="framehandledefaultnames-simpleItemDescriptionValue"></a> `static constant simpleItemDescriptionValue = "SimpleItemDescriptionValue"`
  The framehandle name simpleItemDescriptionValue has the subframe [3]
- <a id="framehandledefaultnames-simpleItemNameValue"></a> `static constant simpleItemNameValue = "SimpleItemNameValue"`
  The framehandle name simpleItemNameValue has the subframe [3]
- <a id="framehandledefaultnames-simpleNameValue"></a> `static constant simpleNameValue = "SimpleNameValue"`
- <a id="framehandledefaultnames-simpleObserverPanel"></a> `static constant simpleObserverPanel = "SimpleObserverPanel"`
- <a id="framehandledefaultnames-simpleProgressIndicator"></a> `static constant simpleProgressIndicator = "SimpleProgressIndicator"`
- <a id="framehandledefaultnames-simpleUnitStatsPanel"></a> `static constant simpleUnitStatsPanel = "SimpleUnitStatsPanel"`
- <a id="framehandledefaultnames-soundButton"></a> `static constant soundButton = "SoundButton"`
- <a id="framehandledefaultnames-soundButtonText"></a> `static constant soundButtonText = "SoundButtonText"`
- <a id="framehandledefaultnames-soundCheckBox"></a> `static constant soundCheckBox = "SoundCheckBox"`
- <a id="framehandledefaultnames-soundPanel"></a> `static constant soundPanel = "SoundPanel"`
- <a id="framehandledefaultnames-soundTitleText"></a> `static constant soundTitleText = "SoundTitleText"`
- <a id="framehandledefaultnames-soundVolumeHighLabel"></a> `static constant soundVolumeHighLabel = "SoundVolumeHighLabel"`
- <a id="framehandledefaultnames-soundVolumeLabel"></a> `static constant soundVolumeLabel = "SoundVolumeLabel"`
- <a id="framehandledefaultnames-soundVolumeLowLabel"></a> `static constant soundVolumeLowLabel = "SoundVolumeLowLabel"`
- <a id="framehandledefaultnames-soundVolumeSlider"></a> `static constant soundVolumeSlider = "SoundVolumeSlider"`
- <a id="framehandledefaultnames-subgroupCheckBox"></a> `static constant subgroupCheckBox = "SubgroupCheckBox"`
- <a id="framehandledefaultnames-subgroupLabel"></a> `static constant subgroupLabel = "SubgroupLabel"`
- <a id="framehandledefaultnames-subtitlesCheckBox"></a> `static constant subtitlesCheckBox = "SubtitlesCheckBox"`
- <a id="framehandledefaultnames-subtitlesLabel"></a> `static constant subtitlesLabel = "SubtitlesLabel"`
- <a id="framehandledefaultnames-textureQualityLabel"></a> `static constant textureQualityLabel = "TextureQualityLabel"`
- <a id="framehandledefaultnames-textureQualityValue"></a> `static constant textureQualityValue = "TextureQualityValue"`
- <a id="framehandledefaultnames-tipsBackButton"></a> `static constant tipsBackButton = "TipsBackButton"`
- <a id="framehandledefaultnames-tipsBackButtonText"></a> `static constant tipsBackButtonText = "TipsBackButtonText"`
- <a id="framehandledefaultnames-tipsButton"></a> `static constant tipsButton = "TipsButton"`
- <a id="framehandledefaultnames-tipsButtonText"></a> `static constant tipsButtonText = "TipsButtonText"`
- <a id="framehandledefaultnames-tipsNextButton"></a> `static constant tipsNextButton = "TipsNextButton"`
- <a id="framehandledefaultnames-tipsNextButtonText"></a> `static constant tipsNextButtonText = "TipsNextButtonText"`
- <a id="framehandledefaultnames-tipsOKButton"></a> `static constant tipsOKButton = "TipsOKButton"`
- <a id="framehandledefaultnames-tipsOKButtonText"></a> `static constant tipsOKButtonText = "TipsOKButtonText"`
- <a id="framehandledefaultnames-tipsPanel"></a> `static constant tipsPanel = "TipsPanel"`
- <a id="framehandledefaultnames-tipsTextArea"></a> `static constant tipsTextArea = "TipsTextArea"`
- <a id="framehandledefaultnames-tipsTitleText"></a> `static constant tipsTitleText = "TipsTitleText"`
- <a id="framehandledefaultnames-tooltipsCheckBox"></a> `static constant tooltipsCheckBox = "TooltipsCheckBox"`
- <a id="framehandledefaultnames-tooltipsLabel"></a> `static constant tooltipsLabel = "TooltipsLabel"`
- <a id="framehandledefaultnames-unitCheckBox"></a> `static constant unitCheckBox = "UnitCheckBox"`
- <a id="framehandledefaultnames-unitLabel"></a> `static constant unitLabel = "UnitLabel"`
- <a id="framehandledefaultnames-unitsCheckBox"></a> `static constant unitsCheckBox = "UnitsCheckBox"`
  The framehandle name unitsCheckBox has the subframes [o t 23]
- <a id="framehandledefaultnames-unitsHeader"></a> `static constant unitsHeader = "UnitsHeader"`
- <a id="framehandledefaultnames-upperButtonBarAlliesButton"></a> `static constant upperButtonBarAlliesButton = "UpperButtonBarAlliesButton"`
- <a id="framehandledefaultnames-upperButtonBarChatButton"></a> `static constant upperButtonBarChatButton = "UpperButtonBarChatButton"`
- <a id="framehandledefaultnames-upperButtonBarFrame"></a> `static constant upperButtonBarFrame = "UpperButtonBarFrame"`
- <a id="framehandledefaultnames-upperButtonBarMenuButton"></a> `static constant upperButtonBarMenuButton = "UpperButtonBarMenuButton"`
- <a id="framehandledefaultnames-upperButtonBarQuestsButton"></a> `static constant upperButtonBarQuestsButton = "UpperButtonBarQuestsButton"`
- <a id="framehandledefaultnames-videoButton"></a> `static constant videoButton = "VideoButton"`
- <a id="framehandledefaultnames-videoButtonText"></a> `static constant videoButtonText = "VideoButtonText"`
- <a id="framehandledefaultnames-videoPanel"></a> `static constant videoPanel = "VideoPanel"`
- <a id="framehandledefaultnames-videoTitleText"></a> `static constant videoTitleText = "VideoTitleText"`
- <a id="framehandledefaultnames-visionCheckBox"></a> `static constant visionCheckBox = "VisionCheckBox"`
  The framehandle name VisionCheckBox has the subframes [o t 23]
- <a id="framehandledefaultnames-visionHeader"></a> `static constant visionHeader = "VisionHeader"`
- <a id="framehandledefaultnames-vSyncCheckBox"></a> `static constant vSyncCheckBox = "VSyncCheckBox"`
- <a id="framehandledefaultnames-vSyncLabel"></a> `static constant vSyncLabel = "VSyncLabel"`
- <a id="framehandledefaultnames-windowModeLabel"></a> `static constant windowModeLabel = "WindowModeLabel"`
- <a id="framehandledefaultnames-wouldTheRealOptionsTitleTextPleaseStandUp"></a> `static constant wouldTheRealOptionsTitleTextPleaseStandUp = "WouldTheRealOptionsTitleTextPleaseStandUp"`

### FramehandleNames

```wurst
public class FramehandleNames
```

**Members:**

- <a id="framehandlenames-adBanner"></a> `static constant adBanner = "AdBanner"`
- <a id="framehandlenames-advancedOptionsDisplay"></a> `static constant advancedOptionsDisplay = "AdvancedOptionsDisplay"`
- <a id="framehandlenames-advancedOptionsPane"></a> `static constant advancedOptionsPane = "AdvancedOptionsPane"`
- <a id="framehandlenames-advancedPopupMenuTemplate"></a> `static constant advancedPopupMenuTemplate = "AdvancedPopupMenuTemplate"`
- <a id="framehandlenames-allianceDialog"></a> `static constant allianceDialog = "AllianceDialog"`
- <a id="framehandlenames-allianceSlot"></a> `static constant allianceSlot = "AllianceSlot"`
- <a id="framehandlenames-battleNetChatActionMenu"></a> `static constant battleNetChatActionMenu = "BattleNetChatActionMenu"`
- <a id="framehandlenames-battleNetChatPanel"></a> `static constant battleNetChatPanel = "BattleNetChatPanel"`
- <a id="framehandlenames-battleNetChatroom"></a> `static constant battleNetChatroom = "BattleNetChatroom"`
- <a id="framehandlenames-battleNetClanInvitation"></a> `static constant battleNetClanInvitation = "BattleNetClanInvitation"`
- <a id="framehandlenames-battleNetClanInviteDialog"></a> `static constant battleNetClanInviteDialog = "BattleNetClanInviteDialog"`
- <a id="framehandlenames-battleNetClanMateListBox"></a> `static constant battleNetClanMateListBox = "BattleNetClanMateListBox"`
- <a id="framehandlenames-battleNetClanPane"></a> `static constant battleNetClanPane = "BattleNetClanPane"`
- <a id="framehandlenames-battleNetConnectDialog"></a> `static constant battleNetConnectDialog = "BattleNetConnectDialog"`
- <a id="framehandlenames-battleNetCustomCreatePanel"></a> `static constant battleNetCustomCreatePanel = "BattleNetCustomCreatePanel"`
- <a id="framehandlenames-battleNetCustomFilterDialog"></a> `static constant battleNetCustomFilterDialog = "BattleNetCustomFilterDialog"`
- <a id="framehandlenames-battleNetCustomJoinPanel"></a> `static constant battleNetCustomJoinPanel = "BattleNetCustomJoinPanel"`
- <a id="framehandlenames-battleNetCustomLoadPanel"></a> `static constant battleNetCustomLoadPanel = "BattleNetCustomLoadPanel"`
- <a id="framehandlenames-battleNetFriendsListBox"></a> `static constant battleNetFriendsListBox = "BattleNetFriendsListBox"`
- <a id="framehandlenames-battleNetFriendsPane"></a> `static constant battleNetFriendsPane = "BattleNetFriendsPane"`
- <a id="framehandlenames-battleNetHelpDialog"></a> `static constant battleNetHelpDialog = "BattleNetHelpDialog"`
- <a id="framehandlenames-battleNetIconSelectBox"></a> `static constant battleNetIconSelectBox = "BattleNetIconSelectBox"`
- <a id="framehandlenames-battleNetIconSelectDialog"></a> `static constant battleNetIconSelectDialog = "BattleNetIconSelectDialog"`
- <a id="framehandlenames-battleNetMainFrame"></a> `static constant battleNetMainFrame = "BattleNetMainFrame"`
- <a id="framehandlenames-battleNetMatchmakerPanel"></a> `static constant battleNetMatchmakerPanel = "BattleNetMatchmakerPanel"`
- <a id="framehandlenames-battleNetMatchmakerPendingInviteDialog"></a> `static constant battleNetMatchmakerPendingInviteDialog = "BattleNetMatchmakerPendingInviteDialog"`
- <a id="framehandlenames-battleNetMatchmakerTeamInviteDialog"></a> `static constant battleNetMatchmakerTeamInviteDialog = "BattleNetMatchmakerTeamInviteDialog"`
- <a id="framehandlenames-battleNetNewsBox"></a> `static constant battleNetNewsBox = "BattleNetNewsBox"`
- <a id="framehandlenames-battleNetPatchDialog"></a> `static constant battleNetPatchDialog = "BattleNetPatchDialog"`
- <a id="framehandlenames-battleNetProfileListBox"></a> `static constant battleNetProfileListBox = "BattleNetProfileListBox"`
- <a id="framehandlenames-battleNetProfileListItem"></a> `static constant battleNetProfileListItem = "BattleNetProfileListItem"`
- <a id="framehandlenames-battleNetProfilePanel"></a> `static constant battleNetProfilePanel = "BattleNetProfilePanel"`
- <a id="framehandlenames-battleNetScheduledGame"></a> `static constant battleNetScheduledGame = "BattleNetScheduledGame"`
- <a id="framehandlenames-battleNetStandardPanel"></a> `static constant battleNetStandardPanel = "BattleNetStandardPanel"`
- <a id="framehandlenames-battleNetStatusBox"></a> `static constant battleNetStatusBox = "BattleNetStatusBox"`
- <a id="framehandlenames-battleNetTeamInvitation"></a> `static constant battleNetTeamInvitation = "BattleNetTeamInvitation"`
- <a id="framehandlenames-battleNetTeamInviteDialog"></a> `static constant battleNetTeamInviteDialog = "BattleNetTeamInviteDialog"`
- <a id="framehandlenames-battleNetTeamPanel"></a> `static constant battleNetTeamPanel = "BattleNetTeamPanel"`
- <a id="framehandlenames-battleNetUserListBox"></a> `static constant battleNetUserListBox = "BattleNetUserListBox"`
- <a id="framehandlenames-bNetPopupMenuBackdropTemplate"></a> `static constant bNetPopupMenuBackdropTemplate = "BNetPopupMenuBackdropTemplate"`
- <a id="framehandlenames-bNetPopupMenuTemplate"></a> `static constant bNetPopupMenuTemplate = "BNetPopupMenuTemplate"`
- <a id="framehandlenames-browserButton"></a> `static constant browserButton = "BrowserButton"`
- <a id="framehandlenames-browserFrame"></a> `static constant browserFrame = "BrowserFrame"`
- <a id="framehandlenames-campaignListBox"></a> `static constant campaignListBox = "CampaignListBox"`
- <a id="framehandlenames-campaignMenu"></a> `static constant campaignMenu = "CampaignMenu"`
- <a id="framehandlenames-chatDialog"></a> `static constant chatDialog = "ChatDialog"`
- <a id="framehandlenames-checkListBox"></a> `static constant checkListBox = "CheckListBox"`
- <a id="framehandlenames-cinematicPanel"></a> `static constant cinematicPanel = "CinematicPanel"`
- <a id="framehandlenames-clanButtonBackdropTemplate"></a> `static constant clanButtonBackdropTemplate = "ClanButtonBackdropTemplate"`
- <a id="framehandlenames-clanButtonDisabledBackdropTemplate"></a> `static constant clanButtonDisabledBackdropTemplate = "ClanButtonDisabledBackdropTemplate"`
- <a id="framehandlenames-clanButtonDisabledPushedBackdropTemplate"></a> `static constant clanButtonDisabledPushedBackdropTemplate = "ClanButtonDisabledPushedBackdropTemplate"`
- <a id="framehandlenames-clanButtonFocusHighlightBackdropTemplate"></a> `static constant clanButtonFocusHighlightBackdropTemplate = "ClanButtonFocusHighlightBackdropTemplate"`
- <a id="framehandlenames-clanButtonMouseOverHighlightBackdropTemplate"></a> `static constant clanButtonMouseOverHighlightBackdropTemplate = "ClanButtonMouseOverHighlightBackdropTemplate"`
- <a id="framehandlenames-clanButtonPushedBackdropTemplate"></a> `static constant clanButtonPushedBackdropTemplate = "ClanButtonPushedBackdropTemplate"`
- <a id="framehandlenames-clanButtonTemplate"></a> `static constant clanButtonTemplate = "ClanButtonTemplate"`
- <a id="framehandlenames-customCampaignMenu"></a> `static constant customCampaignMenu = "CustomCampaignMenu"`
- <a id="framehandlenames-debugButton"></a> `static constant debugButton = "DebugButton"`
- <a id="framehandlenames-decoratedMapListBox"></a> `static constant decoratedMapListBox = "DecoratedMapListBox"`
- <a id="framehandlenames-dialogWar3"></a> `static constant dialogWar3 = "DialogWar3"`
- <a id="framehandlenames-escMenuBackdrop"></a> `static constant escMenuBackdrop = "EscMenuBackdrop"`
- <a id="framehandlenames-escMenuMainPanel"></a> `static constant escMenuMainPanel = "EscMenuMainPanel"`
- <a id="framehandlenames-escMenuMainPanelDialogTextTemplate"></a> `static constant escMenuMainPanelDialogTextTemplate = "EscMenuMainPanelDialogTextTemplate"`
- <a id="framehandlenames-escMenuOptionsConfirmDialog"></a> `static constant escMenuOptionsConfirmDialog = "EscMenuOptionsConfirmDialog"`
- <a id="framehandlenames-escMenuOptionsPanel"></a> `static constant escMenuOptionsPanel = "EscMenuOptionsPanel"`
- <a id="framehandlenames-escMenuSaveDialogTextTemplate"></a> `static constant escMenuSaveDialogTextTemplate = "EscMenuSaveDialogTextTemplate"`
- <a id="framehandlenames-escMenuSaveGamePanel"></a> `static constant escMenuSaveGamePanel = "EscMenuSaveGamePanel"`
- <a id="framehandlenames-filterPopupMenuTemplate"></a> `static constant filterPopupMenuTemplate = "FilterPopupMenuTemplate"`
- <a id="framehandlenames-gameChatroom"></a> `static constant gameChatroom = "GameChatroom"`
- <a id="framehandlenames-gameResultDialog"></a> `static constant gameResultDialog = "GameResultDialog"`
- <a id="framehandlenames-gameSaveSplashDialog"></a> `static constant gameSaveSplashDialog = "GameSaveSplashDialog"`
- <a id="framehandlenames-iconButtonTemplate"></a> `static constant iconButtonTemplate = "IconButtonTemplate"`
- <a id="framehandlenames-iconicButtonTemplate"></a> `static constant iconicButtonTemplate = "IconicButtonTemplate"`
- <a id="framehandlenames-ladderButtonBackdropTemplate"></a> `static constant ladderButtonBackdropTemplate = "LadderButtonBackdropTemplate"`
- <a id="framehandlenames-ladderButtonDisabledBackdropTemplate"></a> `static constant ladderButtonDisabledBackdropTemplate = "LadderButtonDisabledBackdropTemplate"`
- <a id="framehandlenames-ladderButtonDisabledPushedBackdropTemplate"></a> `static constant ladderButtonDisabledPushedBackdropTemplate = "LadderButtonDisabledPushedBackdropTemplate"`
- <a id="framehandlenames-ladderButtonFocusHighlightBackdropTemplate"></a> `static constant ladderButtonFocusHighlightBackdropTemplate = "LadderButtonFocusHighlightBackdropTemplate"`
- <a id="framehandlenames-ladderButtonMouseOverHighlightBackdropTemplate"></a> `static constant ladderButtonMouseOverHighlightBackdropTemplate = "LadderButtonMouseOverHighlightBackdropTemplate"`
- <a id="framehandlenames-ladderButtonPushedBackdropTemplate"></a> `static constant ladderButtonPushedBackdropTemplate = "LadderButtonPushedBackdropTemplate"`
- <a id="framehandlenames-ladderButtonTemplate"></a> `static constant ladderButtonTemplate = "LadderButtonTemplate"`
- <a id="framehandlenames-ladderNameTextTemplate"></a> `static constant ladderNameTextTemplate = "LadderNameTextTemplate"`
- <a id="framehandlenames-leaderboardFrame"></a> `static constant leaderboardFrame = "Leaderboard"`
- <a id="framehandlenames-listBoxWar3"></a> `static constant listBoxWar3 = "ListBoxWar3"`
- <a id="framehandlenames-loading"></a> `static constant loading = "Loading"`
- <a id="framehandlenames-loadingPlayerSlot"></a> `static constant loadingPlayerSlot = "LoadingPlayerSlot"`
- <a id="framehandlenames-loadSavedGameScreen"></a> `static constant loadSavedGameScreen = "LoadSavedGameScreen"`
- <a id="framehandlenames-localMultiplayerCreate"></a> `static constant localMultiplayerCreate = "LocalMultiplayerCreate"`
- <a id="framehandlenames-localMultiplayerJoin"></a> `static constant localMultiplayerJoin = "LocalMultiplayerJoin"`
- <a id="framehandlenames-localMultiplayerLoad"></a> `static constant localMultiplayerLoad = "LocalMultiplayerLoad"`
- <a id="framehandlenames-logDialog"></a> `static constant logDialog = "LogDialog"`
- <a id="framehandlenames-mainMenuFrame"></a> `static constant mainMenuFrame = "MainMenuFrame"`
- <a id="framehandlenames-mapInfoPane"></a> `static constant mapInfoPane = "MapInfoPane"`
- <a id="framehandlenames-mapListBox"></a> `static constant mapListBox = "MapListBox"`
- <a id="framehandlenames-mapPreferenceBox"></a> `static constant mapPreferenceBox = "MapPreferenceBox"`
- <a id="framehandlenames-mapPreferenceBoxBackdrop"></a> `static constant mapPreferenceBoxBackdrop = "MapPreferenceBoxBackdrop"`
- <a id="framehandlenames-mMPlayerSlot"></a> `static constant mMPlayerSlot = "MMPlayerSlot"`
- <a id="framehandlenames-movieScreen"></a> `static constant movieScreen = "MovieScreen"`
- <a id="framehandlenames-multiboardFrame"></a> `static constant multiboardFrame = "Multiboard"`
- <a id="framehandlenames-optionsConfirmDialog"></a> `static constant optionsConfirmDialog = "OptionsConfirmDialog"`
- <a id="framehandlenames-optionsMenu"></a> `static constant optionsMenu = "OptionsMenu"`
- <a id="framehandlenames-optionsPopupMenuBackdropTemplate"></a> `static constant optionsPopupMenuBackdropTemplate = "OptionsPopupMenuBackdropTemplate"`
- <a id="framehandlenames-optionsPopupMenuTemplate"></a> `static constant optionsPopupMenuTemplate = "OptionsPopupMenuTemplate"`
- <a id="framehandlenames-playerSlot"></a> `static constant playerSlot = "PlayerSlot"`
- <a id="framehandlenames-playerSlotPopupMenu"></a> `static constant playerSlotPopupMenu = "PlayerSlotPopupMenu"`
- <a id="framehandlenames-questButtonBackdropTemplate"></a> `static constant questButtonBackdropTemplate = "QuestButtonBackdropTemplate"`
- <a id="framehandlenames-questButtonBaseTemplate"></a> `static constant questButtonBaseTemplate = "QuestButtonBaseTemplate"`
- <a id="framehandlenames-questButtonDisabledBackdropTemplate"></a> `static constant questButtonDisabledBackdropTemplate = "QuestButtonDisabledBackdropTemplate"`
- <a id="framehandlenames-questButtonDisabledPushedBackdropTemplate"></a> `static constant questButtonDisabledPushedBackdropTemplate = "QuestButtonDisabledPushedBackdropTemplate"`
- <a id="framehandlenames-questButtonMouseOverHighlightTemplate"></a> `static constant questButtonMouseOverHighlightTemplate = "QuestButtonMouseOverHighlightTemplate"`
- <a id="framehandlenames-questButtonPushedBackdropTemplate"></a> `static constant questButtonPushedBackdropTemplate = "QuestButtonPushedBackdropTemplate"`
- <a id="framehandlenames-questButtonTemplate"></a> `static constant questButtonTemplate = "QuestButtonTemplate"`
- <a id="framehandlenames-questCheckBox"></a> `static constant questCheckBox = "QuestCheckBox"`
- <a id="framehandlenames-questCheckBox2"></a> `static constant questCheckBox2 = "QuestCheckBox2"`
- <a id="framehandlenames-questCheckBox3"></a> `static constant questCheckBox3 = "QuestCheckBox3"`
- <a id="framehandlenames-questConditionListScrollBar"></a> `static constant questConditionListScrollBar = "QuestConditionListScrollBar"`
- <a id="framehandlenames-questDialog"></a> `static constant questDialog = "QuestDialog"`
- <a id="framehandlenames-questItemListItem"></a> `static constant questItemListItem = "QuestItemListItem"`
- <a id="framehandlenames-questItemListScrollBar"></a> `static constant questItemListScrollBar = "QuestItemListScrollBar"`
- <a id="framehandlenames-questListItem"></a> `static constant questListItem = "QuestListItem"`
- <a id="framehandlenames-questMainListScrollBar"></a> `static constant questMainListScrollBar = "QuestMainListScrollBar"`
- <a id="framehandlenames-quickReplayConfirmDialog"></a> `static constant quickReplayConfirmDialog = "QuickReplayConfirmDialog"`
- <a id="framehandlenames-quickReplayDialog"></a> `static constant quickReplayDialog = "QuickReplayDialog"`
- <a id="framehandlenames-replayButton"></a> `static constant replayButton = "ReplayButton"`
- <a id="framehandlenames-saveReplayPanel"></a> `static constant saveReplayPanel = "SaveReplayPanel"`
- <a id="framehandlenames-scoreScreen4ColumnButtonTemplate"></a> `static constant scoreScreen4ColumnButtonTemplate = "ScoreScreen4ColumnButtonTemplate"`
- <a id="framehandlenames-scoreScreen5ColumnButtonTemplate"></a> `static constant scoreScreen5ColumnButtonTemplate = "ScoreScreen5ColumnButtonTemplate"`
- <a id="framehandlenames-scoreScreenBottomButtonTemplate"></a> `static constant scoreScreenBottomButtonTemplate = "ScoreScreenBottomButtonTemplate"`
- <a id="framehandlenames-scoreScreenBottomCheckButtonTemplate"></a> `static constant scoreScreenBottomCheckButtonTemplate = "ScoreScreenBottomCheckButtonTemplate"`
- <a id="framehandlenames-scoreScreenButtonBackdropTemplate"></a> `static constant scoreScreenButtonBackdropTemplate = "ScoreScreenButtonBackdropTemplate"`
- <a id="framehandlenames-scoreScreenColumnHeaderTemplate"></a> `static constant scoreScreenColumnHeaderTemplate = "ScoreScreenColumnHeaderTemplate"`
- <a id="framehandlenames-scoreScreenFrame"></a> `static constant scoreScreenFrame = "ScoreScreenFrame"`
- <a id="framehandlenames-scoreScreenTabButtonTemplate"></a> `static constant scoreScreenTabButtonTemplate = "ScoreScreenTabButtonTemplate"`
- <a id="framehandlenames-scoreScreenTabTextSelectedTemplate"></a> `static constant scoreScreenTabTextSelectedTemplate = "ScoreScreenTabTextSelectedTemplate"`
- <a id="framehandlenames-scoreScreenTabTextTemplate"></a> `static constant scoreScreenTabTextTemplate = "ScoreScreenTabTextTemplate"`
- <a id="framehandlenames-scriptDialog"></a> `static constant scriptDialog = "ScriptDialog"`
- <a id="framehandlenames-scriptDialogButton"></a> `static constant scriptDialogButton = "ScriptDialogButton"`
- <a id="framehandlenames-singlePlayerMenu"></a> `static constant singlePlayerMenu = "SinglePlayerMenu"`
- <a id="framehandlenames-skirmish"></a> `static constant skirmish = "Skirmish"`
- <a id="framehandlenames-skirmishPopupMenuBackdropTemplate"></a> `static constant skirmishPopupMenuBackdropTemplate = "SkirmishPopupMenuBackdropTemplate"`
- <a id="framehandlenames-skirmishPopupMenuTemplate"></a> `static constant skirmishPopupMenuTemplate = "SkirmishPopupMenuTemplate"`
- <a id="framehandlenames-suspendDialog"></a> `static constant suspendDialog = "SuspendDialog"`
- <a id="framehandlenames-suspendPlayerSlot"></a> `static constant suspendPlayerSlot = "SuspendPlayerSlot"`
- <a id="framehandlenames-teamColorMenu"></a> `static constant teamColorMenu = "TeamColorMenu"`
- <a id="framehandlenames-teamLabelTextTemplate"></a> `static constant teamLabelTextTemplate = "TeamLabelTextTemplate"`
- <a id="framehandlenames-teamLadderRankValueTextTemplate"></a> `static constant teamLadderRankValueTextTemplate = "TeamLadderRankValueTextTemplate"`
- <a id="framehandlenames-teamMemberPopupMenu"></a> `static constant teamMemberPopupMenu = "TeamMemberPopupMenu"`
- <a id="framehandlenames-teamPopupMenuBackdropTemplate"></a> `static constant teamPopupMenuBackdropTemplate = "TeamPopupMenuBackdropTemplate"`
- <a id="framehandlenames-teamPopupMenuTemplate"></a> `static constant teamPopupMenuTemplate = "TeamPopupMenuTemplate"`
- <a id="framehandlenames-teamSetup"></a> `static constant teamSetup = "TeamSetup"`
- <a id="framehandlenames-teamValueTextTemplate"></a> `static constant teamValueTextTemplate = "TeamValueTextTemplate"`
- <a id="framehandlenames-timerDialog"></a> `static constant timerDialog = "TimerDialog"`
- <a id="framehandlenames-unresponsiveDialog"></a> `static constant unresponsiveDialog = "UnresponsiveDialog"`
- <a id="framehandlenames-userDataMigrationDialog"></a> `static constant userDataMigrationDialog = "UserDataMigrationDialog"`
- <a id="framehandlenames-viewReplayScreen"></a> `static constant viewReplayScreen = "ViewReplayScreen"`
