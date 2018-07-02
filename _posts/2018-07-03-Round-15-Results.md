---

layout: post

title: "Round 15 Results"

date: 2018-07-03

---

<ul class="post">

<div class="blurb">



 <p>
What a weird and wonderful round of footy. After 2 scores with both teams scoring 100+ points in the first 14 rounds we had 3 in one week. Unfortunately for the model it was a less successful round with only 3 of the 9 tips coming in correctly.   
 </p>

<table border="1" class="dataframe">   <thead>     <tr style="text-align: center;">       <th>Home</th>       <th>Away</th>       <th>Home Predicted Score</th>       <th>Away Predicted Score</th>       <th>Predicted Margin</th>       <th>Home Score</th>       <th>Away Score</th>       <th>Margin</th>       <th>Error</th>     </tr>   </thead>   <tbody>     <tr>       <td>Richmond</td>       <td>Sydney</td>       <td>78</td>       <td>91</td>       <td>-13</td>       <td>93</td>       <td>67</td>       <td>26</td>       <td>38.75</td>     </tr>     <tr>       <td>Western Bulldogs</td>       <td>Geelong</td>       <td>60</td>       <td>94</td>       <td>-34</td>       <td>103</td>       <td>101</td>       <td>2</td>       <td>35.67</td>     </tr>     <tr>       <td>Carlton</td>       <td>Port Adelaide</td>       <td>53</td>       <td>95</td>       <td>-42</td>       <td>69</td>       <td>90</td>       <td>-21</td>       <td>20.79</td>     </tr>     <tr>       <td>Adelaide</td>       <td>West Coast</td>       <td>76</td>       <td>86</td>       <td>-10</td>       <td>88</td>       <td>78</td>       <td>10</td>       <td>19.72</td>     </tr>     <tr>       <td>Gold Coast</td>       <td>Collingwood</td>       <td>59</td>       <td>107</td>       <td>-47</td>       <td>60</td>       <td>99</td>       <td>-39</td>       <td>8.29</td>     </tr>     <tr>       <td>GW Sydney</td>       <td>Hawthorn</td>       <td>79</td>       <td>73</td>       <td>6</td>       <td>95</td>       <td>84</td>       <td>11</td>       <td>5.21</td>     </tr>     <tr>       <td>Melbourne</td>       <td>St Kilda</td>       <td>107</td>       <td>76</td>       <td>31</td>       <td>117</td>       <td>119</td>       <td>-2</td>       <td>-33.39</td>     </tr>     <tr>       <td>Essendon</td>       <td>North Melbourne</td>       <td>81</td>       <td>88</td>       <td>-6</td>       <td>125</td>       <td>108</td>       <td>17</td>       <td>23.26</td>     </tr>     <tr>       <td>Fremantle</td>       <td>Brisbane Lions</td>       <td>90</td>       <td>82</td>       <td>8</td>       <td>64</td>       <td>119</td>       <td>-55</td>       <td>-62.7</td>     </tr>   </tbody> </table>

 <p>

 	Despite only 3/9 correct tips the model and had a MAE of 27.53 decreasing the season MAE to 28.67.

 </p>



<p>

</p>

<h1>

Updated ratings

</h1>

<table border="1" class="dataframe">   <thead>     <tr style="text-align: center;">       <th>Team</th>       <th>Offensive Rating</th>       <th>Defensive Rating</th>       <th>Overall Rating</th>       <th>Last Offensive Rating</th>       <th>Last Defensive Rating</th>       <th>Last Overall Rating</th>       <th>Overall Change</th>       <th>Change</th>     </tr>   </thead>   <tbody>     <tr>       <td>Richmond</td>       <td>8.79923</td>       <td>10.6731</td>       <td>19.4724</td>       <td>7.59958</td>       <td>8.77307</td>       <td>16.3726</td>       <td>3.099722</td>       <td>2</td>     </tr>     <tr>       <td>Sydney</td>       <td>1.21159</td>       <td>13.8805</td>       <td>15.092</td>       <td>3.11165</td>       <td>15.0801</td>       <td>18.1918</td>       <td>-3.099722</td>       <td>-1</td>     </tr>     <tr>       <td>Melbourne</td>       <td>13.833</td>       <td>0.0117053</td>       <td>13.8447</td>       <td>13.0337</td>       <td>3.48214</td>       <td>16.5158</td>       <td>-2.671133</td>       <td>-1</td>     </tr>     <tr>       <td>Collingwood</td>       <td>8.32819</td>       <td>4.37397</td>       <td>12.7022</td>       <td>8.94221</td>       <td>4.42337</td>       <td>13.3656</td>       <td>-0.663425</td>       <td>1</td>     </tr>     <tr>       <td>Geelong</td>       <td>3.00802</td>       <td>9.1528</td>       <td>12.1608</td>       <td>2.45416</td>       <td>12.5606</td>       <td>15.0148</td>       <td>-2.853943</td>       <td>-1</td>     </tr>     <tr>       <td>Port Adelaide</td>       <td>2.02142</td>       <td>9.22524</td>       <td>11.2467</td>       <td>2.43626</td>       <td>10.4738</td>       <td>12.91</td>       <td>-1.663381</td>       <td>0</td>     </tr>     <tr>       <td>West Coast</td>       <td>4.82132</td>       <td>5.46073</td>       <td>10.282</td>       <td>5.46679</td>       <td>6.39292</td>       <td>11.8597</td>       <td>-1.577666</td>       <td>0</td>     </tr>     <tr>       <td>GW Sydney</td>       <td>2.67471</td>       <td>5.13258</td>       <td>7.80729</td>       <td>1.36425</td>       <td>6.02649</td>       <td>7.39074</td>       <td>0.416547</td>       <td>0</td>     </tr>     <tr>       <td>North Melbourne</td>       <td>4.83452</td>       <td>-0.280687</td>       <td>4.55384</td>       <td>3.20105</td>       <td>3.21381</td>       <td>6.41485</td>       <td>-1.861017</td>       <td>0</td>     </tr>     <tr>       <td>Hawthorn</td>       <td>-0.921304</td>       <td>5.33991</td>       <td>4.41861</td>       <td>-1.81522</td>       <td>6.65038</td>       <td>4.83516</td>       <td>-0.416547</td>       <td>0</td>     </tr>     <tr>       <td>Adelaide</td>       <td>-0.109665</td>       <td>1.30734</td>       <td>1.19767</td>       <td>-1.04186</td>       <td>0.661868</td>       <td>-0.379992</td>       <td>1.577666</td>       <td>0</td>     </tr>     <tr>       <td>Essendon</td>       <td>0.546957</td>       <td>-0.141709</td>       <td>0.405248</td>       <td>-2.94754</td>       <td>1.49177</td>       <td>-1.45577</td>       <td>1.861017</td>       <td>0</td>     </tr>     <tr>       <td>Western Bulldogs</td>       <td>-7.40925</td>       <td>-3.46839</td>       <td>-10.8776</td>       <td>-10.8171</td>       <td>-2.91453</td>       <td>-13.7316</td>       <td>2.853943</td>       <td>1</td>     </tr>     <tr>       <td>Brisbane Lions</td>       <td>-0.707368</td>       <td>-11.7378</td>       <td>-12.4451</td>       <td>-3.66271</td>       <td>-13.7988</td>       <td>-17.4615</td>       <td>5.016335</td>       <td>2</td>     </tr>     <tr>       <td>St Kilda</td>       <td>-4.84583</td>       <td>-8.08458</td>       <td>-12.9304</td>       <td>-8.31627</td>       <td>-7.28528</td>       <td>-15.6015</td>       <td>2.671133</td>       <td>0</td>     </tr>     <tr>       <td>Fremantle</td>       <td>-9.2085</td>       <td>-5.56513</td>       <td>-14.7736</td>       <td>-7.14751</td>       <td>-2.60978</td>       <td>-9.75729</td>       <td>-5.016335</td>       <td>-3</td>     </tr>     <tr>       <td>Carlton</td>       <td>-14.9107</td>       <td>-10.1056</td>       <td>-25.0162</td>       <td>-16.1592</td>       <td>-10.5204</td>       <td>-26.6796</td>       <td>1.663381</td>       <td>0</td>     </tr>     <tr>       <td>Gold Coast</td>       <td>-20.4188</td>       <td>-16.7092</td>       <td>-37.128</td>       <td>-20.4682</td>       <td>-17.3232</td>       <td>-37.7914</td>       <td>0.663425</td>       <td>0</td>     </tr>   </tbody> </table>
</p>


</div><!-- /.blurb -->	

</ul>
