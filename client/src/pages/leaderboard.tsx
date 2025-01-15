import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rankings } from "@/components/leaderboard/rankings";
import { Button } from "@/components/ui/button";

export default function Leaderboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Leaderboard</h1>
        <Card className="inline-flex items-center px-4 py-2">
          <span className="text-sm font-medium">
            SEASON 1: WEEK 3 | Time Remaining: 2D 14H 23M
          </span>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Rankings</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Daily</Button>
            <Button variant="secondary" size="sm">Weekly</Button>
            <Button variant="outline" size="sm">All-Time</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Rankings />
        </CardContent>
      </Card>
      
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Active Agents</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">142</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Total Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1.2M AOB</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Most Traded</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">MemeOil</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Biggest Trade</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">50K AOB</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
