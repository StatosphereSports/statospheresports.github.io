---

layout: post

title: "Expected Scores"

date: 2018-07-17

---

<ul class="post">

<div class="blurb">

 <p>
 Expected Goals is something that has been used a lot over the last month during the World Cup and is a commonly used statistic in Soccer to measure the actual performance of teams, particularly where, given the low scoring, the final result can be lacking in its explanation of the true perforamnce of the two sides on the day. While there are numerous questions surrounding the appropriateness of this due to factors such as game situation, that is a different discussion and today I plan to have a brief look at applying this to AFL.
  </p>

  <p>
  Rob Younger of Figuring Footy was a pioneer in this area before his move to Port Adelaide but due to a lack of access to Champion Data's data it has made exploring this very difficult. I've fortunately managed to scrape together some data that allows me to look at this to some level, unfortunately there is still a lot missing from this but it is a start. One major area that is currently lacking is the situation of each shot, such as whether it was a set shot or general play but I hope to be able to be able to include this for at least the majority of shots at some point in the future, getting the data for all shots looks improbable at this point.</p>

<p>
Using this data I have put together a simplistic model of expected score for each shot based on where it was taken from, this is still very much in its infancy and I plan to build on this a lot more going forward, time permitting, there are a number of factors that I have noted to try and improve at some stage in the future and I hope to improve this as time goes on.</p>

<p>
One of the great things that Rob was able to do when looking at the data was the visualisation of this, unfortunately my skills are a long way off his and the process of building the data into an attractive image is still someway off but it is something that I hope to improve on as part of this project and hopefully I am able to turn this data into a nice visualisation at some point in the future. Any advice from anyone in this area would be appreciated, particularly if it relates to Python.
</p>

<p>For now though I thought I would put up the expected scores from each game this round. Richmond - GWS was the only game that would've resulted in a different outcome had each team converted at their expected score, however significant differences can be noted in teams final scores and expected scores across all games this round, with some large over and under performances. This is possibly simply related to the inaccuracies and simplicities of the model and does not truly indicate how much sides over or under performed in front of goal, relative to expectations.</p>


<table border="1" class="dataframe">   <thead>     <tr style="text-align: right;">       <th>Home</th>       <th>Away</th>       <th>Home Shots</th>       <th>Home Shot Difficulty</th>       <th>Home Rushed</th>       <th>Home Expected Score</th>       <th>Home Score</th>       <th>Away Shots</th>       <th>Away Shot Difficulty</th>       <th>Away Rushed</th>       <th>Away Expected Score</th>       <th>Away Score</th>     </tr>   </thead>   <tbody>     <tr>       <td>Adelaide</td>       <td>Geelong</td>       <td>30</td>       <td>57.76</td>       <td>2</td>       <td>118.643</td>       <td>112</td>       <td>22</td>       <td>58.4</td>       <td>5</td>       <td>91.2378</td>       <td>97</td>     </tr>     <tr>       <td>St Kilda</td>       <td>Carlton</td>       <td>34</td>       <td>57.14</td>       <td>2</td>       <td>133.141</td>       <td>116</td>       <td>13</td>       <td>53.99</td>       <td>4</td>       <td>52.0909</td>       <td>52</td>     </tr>     <tr>       <td>Hawthorn</td>       <td>Brisbane</td>       <td>17</td>       <td>59.1</td>       <td>3</td>       <td>70.233</td>       <td>65</td>       <td>22</td>       <td>60.91</td>       <td>1</td>       <td>89.9986</td>       <td>98</td>     </tr>     <tr>       <td>Melbourne</td>       <td>Western Bulldogs</td>       <td>25</td>       <td>60.99</td>       <td>4</td>       <td>105.236</td>       <td>119</td>       <td>17</td>       <td>57.26</td>       <td>2</td>       <td>67.6746</td>       <td>69</td>     </tr>     <tr>       <td>Gold Coast</td>       <td>Essendon</td>       <td>20</td>       <td>51.16</td>       <td>1</td>       <td>72.1633</td>       <td>51</td>       <td>28</td>       <td>58.89</td>       <td>1</td>       <td>111.439</td>       <td>95</td>     </tr>     <tr>       <td>GW Sydney</td>       <td>Richmond</td>       <td>19</td>       <td>53.18</td>       <td>5</td>       <td>74.5183</td>       <td>79</td>       <td>23</td>       <td>58.73</td>       <td>4</td>       <td>94.5359</td>       <td>77</td>     </tr>     <tr>       <td>Collingwood</td>       <td>West Coast</td>       <td>19</td>       <td>59.03</td>       <td>3</td>       <td>78.0751</td>       <td>67</td>       <td>25</td>       <td>62.43</td>       <td>2</td>       <td>105.043</td>       <td>102</td>     </tr>     <tr>       <td>North Melbourne</td>       <td>Sydney</td>       <td>20</td>       <td>55.69</td>       <td>3</td>       <td>78.6931</td>       <td>98</td>       <td>24</td>       <td>56.82</td>       <td>0</td>       <td>92.1867</td>       <td>104</td>     </tr>     <tr>       <td>Fremantle</td>       <td>Port Adelaide</td>       <td>17</td>       <td>59.93</td>       <td>2</td>       <td>69.9409</td>       <td>59</td>       <td>13</td>       <td>56.74</td>       <td>2</td>       <td>51.8817</td>       <td>50</td>     </tr>   </tbody> </table>


<p>
	As I've said the model still has a lot of work to do and this is something I will keep exploring when I have the time, as well as looking at ways to visualise the data and developing the skill set to make this happen.
</p>
</div><!-- /.blurb -->	

</ul>
