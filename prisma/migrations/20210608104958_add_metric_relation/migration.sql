-- AddForeignKey
ALTER TABLE "goals" ADD FOREIGN KEY ("metric") REFERENCES "funnel_nodes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
