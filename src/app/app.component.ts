import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  xml: any = `<?xml version='1.0' encoding='UTF-8' standalone='yes'?>
  <doppelkopfwertung version="5" finished="0">
      <meta>
          <startDate>1673776442270</startDate>
          <saveDate>1673779873525</saveDate>
          <info1>Heike, Michaela, Marga, Werner, Josef</info1>
          <info2>Heike: 7, Michaela: -21, Marga: 12, Werner: 4, Josef: -2</info2>
      </meta>
      <settings>
          <pref_player_scores_enabled type="java.lang.Boolean">false</pref_player_scores_enabled>
          <pref_bock_enabled type="java.lang.Boolean">true</pref_bock_enabled>
          <CountSet type="java.lang.String">fpruefer.de.dk_standard</CountSet>
          <ScoreType type="java.lang.Integer">2</ScoreType>
          <pref_bock_multi type="java.lang.String">multiply</pref_bock_multi>
          <pref_bock_value type="java.lang.String">default</pref_bock_value>
          <pref_match_count type="java.lang.Integer">0</pref_match_count>
      </settings>
      <players count="5">
          <player id="0" points="7">Heike</player>
          <player id="1" points="-21">Michaela</player>
          <player id="2" points="12">Marga</player>
          <player id="3" points="4">Werner</player>
          <player id="4" points="-2">Josef</player>
      </players>
      <rounds count_players="5" rounds="3">
          <round id="0">
              <win_points>9</win_points>
              <loose_points>-9</loose_points>
              <bock>0</bock>
              <triggerBock>false</triggerBock>
              <winners>
                  <players count="2">
                      <player id="2" points="0">Marga</player>
                      <player id="3" points="0">Werner</player>
                  </players>
              </winners>
              <players count="4">
                  <player id="1" points="0">Michaela</player>
                  <player id="2" points="0">Marga</player>
                  <player id="3" points="0">Werner</player>
                  <player id="4" points="0">Josef</player>
              </players>
              <kumuliert count="5">
                  <points id="0">0</points>
                  <points id="1">-9</points>
                  <points id="2">9</points>
                  <points id="3">9</points>
                  <points id="4">-9</points>
              </kumuliert>
              <round>
                  <edWinRe type="java.lang.Boolean">true</edWinRe>
                  <edBock type="java.lang.Integer">0</edBock>
                  <edGroupSpecialRe_karlchen type="java.lang.Boolean">false</edGroupSpecialRe_karlchen>
                  <edPlayer_1 type="java.lang.Boolean">true</edPlayer_1>
                  <edPlayer_2 type="java.lang.Boolean">false</edPlayer_2>
                  <edPlayer_3 type="java.lang.Boolean">false</edPlayer_3>
                  <edPlayer_4 type="java.lang.Boolean">true</edPlayer_4>
                  <edWinStepContra type="java.lang.Integer">0</edWinStepContra>
                  <edGroupSpecialContra_doppelkopf1 type="java.lang.Boolean">false</edGroupSpecialContra_doppelkopf1>
                  <edGroupSpecialContra_doppelkopf2 type="java.lang.Boolean">false</edGroupSpecialContra_doppelkopf2>
                  <edGroupSpecialContra_karlchen type="java.lang.Boolean">false</edGroupSpecialContra_karlchen>
                  <edGroupSpecialRe_fuchs1 type="java.lang.Boolean">false</edGroupSpecialRe_fuchs1>
                  <edGroupSpecialRe_fuchs2 type="java.lang.Boolean">false</edGroupSpecialRe_fuchs2>
                  <edGroupSpecialRe_doppelkopf1 type="java.lang.Boolean">false</edGroupSpecialRe_doppelkopf1>
                  <edGroupSpecialRe_doppelkopf2 type="java.lang.Boolean">false</edGroupSpecialRe_doppelkopf2>
                  <edPoints type="java.lang.Integer">230</edPoints>
                  <edGroupSpecialContra_fuchs1 type="java.lang.Boolean">false</edGroupSpecialContra_fuchs1>
                  <edGroupSpecialContra_fuchs2 type="java.lang.Boolean">false</edGroupSpecialContra_fuchs2>
                  <edTriggerBock type="java.lang.Boolean">false</edTriggerBock>
                  <edWinContra type="java.lang.Boolean">true</edWinContra>
                  <edWinStepRe type="java.lang.Integer">0</edWinStepRe>
              </round>
          </round>
          <round id="1">
              <win_points>3</win_points>
              <loose_points>-9</loose_points>
              <bock>0</bock>
              <triggerBock>false</triggerBock>
              <winners>
                  <players count="3">
                      <player id="0" points="0">Heike</player>
                      <player id="2" points="9">Marga</player>
                      <player id="4" points="-9">Josef</player>
                  </players>
              </winners>
              <players count="4">
                  <player id="0" points="0">Heike</player>
                  <player id="2" points="0">Marga</player>
                  <player id="3" points="0">Werner</player>
                  <player id="4" points="0">Josef</player>
              </players>
              <kumuliert count="5">
                  <points id="0">3</points>
                  <points id="1">-9</points>
                  <points id="2">12</points>
                  <points id="3">0</points>
                  <points id="4">-6</points>
              </kumuliert>
              <round>
                  <edWinRe type="java.lang.Boolean">true</edWinRe>
                  <edBock type="java.lang.Integer">0</edBock>
                  <edPlayer_0 type="java.lang.Boolean">false</edPlayer_0>
                  <edPlayer_2 type="java.lang.Boolean">false</edPlayer_2>
                  <edPlayer_3 type="java.lang.Boolean">true</edPlayer_3>
                  <edPlayer_4 type="java.lang.Boolean">false</edPlayer_4>
                  <edWinStepContra type="java.lang.Integer">0</edWinStepContra>
                  <edBonus_Solo type="java.lang.Integer">1</edBonus_Solo>
                  <edPoints type="java.lang.Integer">120</edPoints>
                  <edTriggerBock type="java.lang.Boolean">false</edTriggerBock>
                  <edWinContra type="java.lang.Boolean">false</edWinContra>
                  <edWinStepRe type="java.lang.Integer">0</edWinStepRe>
              </round>
          </round>
          <round id="2">
              <win_points>4</win_points>
              <loose_points>-12</loose_points>
              <bock>0</bock>
              <triggerBock>false</triggerBock>
              <winners>
                  <players count="3">
                      <player id="0" points="3">Heike</player>
                      <player id="3" points="0">Werner</player>
                      <player id="4" points="-6">Josef</player>
                  </players>
              </winners>
              <players count="4">
                  <player id="0" points="0">Heike</player>
                  <player id="1" points="0">Michaela</player>
                  <player id="3" points="0">Werner</player>
                  <player id="4" points="0">Josef</player>
              </players>
              <kumuliert count="5">
                  <points id="0">7</points>
                  <points id="1">-21</points>
                  <points id="2">12</points>
                  <points id="3">4</points>
                  <points id="4">-2</points>
              </kumuliert>
              <round>
                  <edWinRe type="java.lang.Boolean">false</edWinRe>
                  <edBock type="java.lang.Integer">0</edBock>
                  <edPlayer_0 type="java.lang.Boolean">false</edPlayer_0>
                  <edPlayer_1 type="java.lang.Boolean">true</edPlayer_1>
                  <edPlayer_3 type="java.lang.Boolean">false</edPlayer_3>
                  <edPlayer_4 type="java.lang.Boolean">false</edPlayer_4>
                  <edWinStepContra type="java.lang.Integer">0</edWinStepContra>
                  <edBonus_Solo type="java.lang.Integer">1</edBonus_Solo>
                  <edPoints type="java.lang.Integer">217</edPoints>
                  <edTriggerBock type="java.lang.Boolean">false</edTriggerBock>
                  <edWinContra type="java.lang.Boolean">false</edWinContra>
                  <edWinStepRe type="java.lang.Integer">0</edWinStepRe>
              </round>
          </round>
      </rounds>
  </doppelkopfwertung>`;

  constructor() {}
}
